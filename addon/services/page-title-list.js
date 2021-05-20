import { getOwner } from '@ember/application';
import { scheduleOnce } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { assign } from '@ember/polyfills';
import { assert } from '@ember/debug';

let isFastBoot = typeof FastBoot !== 'undefined';

const RouterEvent = {
  ROUTE_DID_CHANGE: 'routeDidChange',
};

/**
  @class page-title-list
  @extends Ember.Service
 */
export default class PageTitleListService extends Service {
  @service('page-title')
  pageTitle;

  @service('router')
  router;

  // in fastboot context "document" is instance of
  // ember-fastboot/simple-dom document
  @service('-document')
  document;

  tokens = [];

  _defaultConfig = {
    // The default separator to use between tokens.
    separator: ' | ',

    // The default prepend value to use.
    prepend: true,

    // The default replace value to use.
    replace: null,
  };

  constructor() {
    super(...arguments);
    this._validateExistingTitleElement();

    let config = getOwner(this).resolveRegistration('config:environment');
    if (config.pageTitle) {
      ['separator', 'prepend', 'replace'].forEach((key) => {
        if (!isEmpty(config.pageTitle[key])) {
          this._defaultConfig[key] = config.pageTitle[key];
        }
      });
    }
    this.router.on(RouterEvent.ROUTE_DID_CHANGE, this.scheduleTitleUpdate);
  }

  applyTokenDefaults(token) {
    let defaultSeparator = this._defaultConfig.separator;
    let defaultPrepend = this._defaultConfig.prepend;
    let defaultReplace = this._defaultConfig.replace;

    if (token.separator == null) {
      token.separator = defaultSeparator;
    }

    if (token.prepend == null && defaultPrepend != null) {
      token.prepend = defaultPrepend;
    }

    if (token.replace == null && defaultReplace != null) {
      token.replace = defaultReplace;
    }
  }

  inheritFromPrevious(token) {
    let previous = token.previous;
    if (previous) {
      if (token.separator == null) {
        token.separator = previous.separator;
      }

      if (token.prepend == null) {
        token.prepend = previous.prepend;
      }
    }
  }

  push(token) {
    let tokenForId = this._findTokenById(token.id);
    if (tokenForId) {
      let index = this.tokens.indexOf(tokenForId);
      let tokens = [...this.tokens];
      let previous = tokenForId.previous;
      token.previous = previous;
      token.next = tokenForId.next;
      this.inheritFromPrevious(token);
      this.applyTokenDefaults(token);

      tokens.splice(index, 1, token);
      this.tokens = tokens;
      return;
    }

    let previous = this.tokens.slice(-1)[0];
    if (previous) {
      token.previous = previous;
      previous.next = token;
      this.inheritFromPrevious(token);
    }

    this.applyTokenDefaults(token);
    this.tokens = [...this.tokens, token];
  }

  remove(id) {
    let token = this._findTokenById(id);
    let { next, previous } = token;
    if (next) {
      next.previous = previous;
    }

    if (previous) {
      previous.next = next;
    }

    token.previous = token.next = null;

    let tokens = [...this.tokens];
    tokens.splice(tokens.indexOf(token), 1);
    this.tokens = tokens;
  }

  get visibleTokens() {
    let tokens = this.tokens;
    let i = tokens ? tokens.length : 0;
    let visible = [];
    while (i--) {
      let token = tokens[i];
      if (token.replace) {
        visible.unshift(token);
        break;
      } else {
        visible.unshift(token);
      }
    }
    return visible;
  }

  get sortedTokens() {
    let visible = this.visibleTokens;
    let appending = true;
    let group = [];
    let groups = [group];
    let frontGroups = [];
    visible.forEach((token) => {
      if (token.front) {
        frontGroups.unshift(token);
      } else if (token.prepend) {
        if (appending) {
          appending = false;
          group = [];
          groups.push(group);
        }
        let lastToken = group[0];
        if (lastToken) {
          token = assign({}, token);
          token.separator = lastToken.separator;
        }
        group.unshift(token);
      } else {
        if (!appending) {
          appending = true;
          group = [];
          groups.push(group);
        }
        group.push(token);
      }
    });

    return frontGroups.concat(groups.reduce((E, group) => E.concat(group), []));
  }

  scheduleTitleUpdate = () => {
    scheduleOnce('afterRender', this, this._updateTitle);
  };

  toString() {
    let tokens = this.sortedTokens;
    let title = [];
    for (let i = 0, len = tokens.length; i < len; i++) {
      let token = tokens[i];
      if (token.title) {
        title.push(token.title);
        if (i + 1 < len) {
          title.push(token.separator);
        }
      }
    }
    return title.join('');
  }

  willDestroy() {
    super.willDestroy();
    this.router.off(RouterEvent.ROUTE_DID_CHANGE, this.scheduleTitleUpdate);
  }

  _updateTitle() {
    const toBeTitle = this.toString();

    if (isFastBoot) {
      this.updateFastbootTitle(toBeTitle);
    } else {
      /**
       * When rendering app with "?fastboot=false" (http://ember-fastboot.com/docs/user-guide#disabling-fastboot)
       * We will not have <title> element present in DOM.
       *
       * But this is fine as by HTML spec,
       * one is created upon assigning "document.title" value;
       *
       * https://html.spec.whatwg.org/multipage/dom.html#dom-tree-accessors
       */
      this.document.title = toBeTitle;
    }

    this.pageTitle.titleDidUpdate(toBeTitle);
  }

  /**
   * Validate if there's more than one title element present.
   *
   * Example: ember-cli-head can cause conflicting updates.
   * @private
   */
  _validateExistingTitleElement() {
    if (isFastBoot) {
      return;
    }
    assert(
      '[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.',
      document.head.querySelectorAll('title').length <= 1
    );
  }

  /**
   * Find token by id
   *
   * IE11 compatible approach due to lack of Array.find support
   *
   * @param {String} id
   * @private
   */
  _findTokenById(id) {
    return this.tokens.filter((token) => {
      return token.id === id;
    })[0];
  }

  updateFastbootTitle(toBeTitle) {
    if (!isFastBoot) {
      return;
    }
    const headElement = this.document.head;
    const headChildNodes = headElement.childNodes;

    // Remove existing title elements from previous render cycle
    for (let i = 0; i < headChildNodes.length; i++) {
      let node = headChildNodes[i];
      if (node.nodeName.toLowerCase() === 'title') {
        headElement.removeChild(node);
      }
    }

    // Add title element with latest value
    let titleEl = this.document.createElement('title');
    let titleContents = this.document.createTextNode(toBeTitle);
    titleEl.appendChild(titleContents);
    headElement.appendChild(titleEl);
  }
}
