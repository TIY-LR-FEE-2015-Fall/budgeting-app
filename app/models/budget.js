import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr(),
  startingAmount: DS.attr('number'),
  transactions: DS.hasMany('transaction'),

  remaining: Ember.computed('startingAmount', 'transactions.@each.amount', function() {
    return this.get('startingAmount') + this.get('transactions').reduce(function(carry, curr) {
      return carry + curr.get('amount');
    }, 0);
  }),
});
