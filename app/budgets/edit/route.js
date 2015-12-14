import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveBudget(values) {
      let model = this.modelFor(this.routeName);

      model.setProperties(values);

      model.save().then(() => {
        this.transitionTo('budgets.index');
      });
    },
  },
});
