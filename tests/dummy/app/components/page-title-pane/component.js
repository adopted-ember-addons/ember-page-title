import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, set } from '@ember/object';
import PageTitleList from 'ember-page-title/services/page-title-list';

let TitleList = PageTitleList.extend({
  _removeExistingTitleTag() {
    return;
  },
});

export default Component.extend({
  tagName: '',

  titleList: computed({
    get() {
      return TitleList.create();
    },
  }),

  lastIndex: computed('titleList.{sortedTokens.length,tokens.length}', {
    get() {
      return this.titleList.sortedTokens.length - 1;
    },
  }),

  actions: {
    highlight(token) {
      let sortedTokens = A(this.titleList.sortedTokens);
      let wasActive = token.active;
      this.titleList.tokens.setEach('active', false);
      sortedTokens.setEach('active', false);

      if (!wasActive) {
        set(sortedTokens.findBy('id', token.id), 'active', true);
        set(token, 'active', true);
      }
    },
  },
});
