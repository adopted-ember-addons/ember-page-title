import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', function () {
    this.route('authors', function() {
      this.route('profile');
    });
  });
  this.route('posts');
  this.route('post', { path: '/posts/:post_id' });
  this.route('author', { path: '/authors/:author_id' });
  this.route('hollywood', { path: '/hollywood' });
  this.route('feed', { path: '/feeds/:name' });
  this.route('reader', { path: '/reader' });
});

export default Router;
