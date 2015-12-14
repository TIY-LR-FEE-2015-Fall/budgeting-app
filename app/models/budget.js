import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  startDate: DS.attr(),
  remaining: DS.attr(),
});
