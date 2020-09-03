import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';
import { getPageTitle } from "../helpers/get-page-title"

module('FastBoot: title', function(hooks) {
  setup(hooks);

  test('the default configuration works', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/posts');

    assert.equal(getPageTitle(htmlDocument), 'Posts | My App');
  });

  test('the replace attribute works', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/about');

    assert.equal(getPageTitle(htmlDocument), 'About My App');
  });

  test('custom separators work', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/about/authors');

    assert.equal(getPageTitle(htmlDocument), 'Authors > About My App');
  });

  test('custom separators are inherited', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/about/authors/profile');

    assert.equal(getPageTitle(htmlDocument), 'Profile > Authors > About My App');
  });

  test('multiple components in a row work', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/posts/rails-is-omakase');

    assert.equal(getPageTitle(htmlDocument), 'Rails is Omakase | Posts | My App');
  });

  test('the prepend=false declaration works', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/authors/tomster');

    assert.equal(getPageTitle(htmlDocument), 'My App | Authors < Tomster');
  });

  test('replace nested in prepends work', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/hollywood');

    assert.equal(getPageTitle(htmlDocument), 'Hollywood ★ Stars everywhere');
  });

  test('multitoken titles work', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/feeds/tomster');

    assert.equal(getPageTitle(htmlDocument), 'Tomster (@tomster)');
  });

  test('front tokens work', async function (assert) {
    assert.expect(1);
    let { htmlDocument } = await visit('/reader');

    assert.equal(getPageTitle(htmlDocument), '(10) Reader | My App');
  });
});
