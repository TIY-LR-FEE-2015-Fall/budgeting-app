import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr(),
  startingAmount: DS.attr('number'),
  transactions: DS.hasMany('transaction'),

  remaining: Ember.computed('startingAmount', function() {
    return this.get('startingAmount');
  }),
});
