import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('books', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:book_id'});
  });
});

export default Router;
