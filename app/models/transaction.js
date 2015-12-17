import DS from 'ember-data';

export default DS.Model.extend({
  notes: DS.attr('string'),
  amount: DS.attr('number'),
  createdAt: DS.attr(),

  budget: DS.belongsTo('budget'),
});
