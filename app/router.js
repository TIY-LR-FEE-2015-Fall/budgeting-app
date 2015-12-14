import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('budgets', { path: '/' }, function() {
    this.route('new');
  });
});

export default Router;
