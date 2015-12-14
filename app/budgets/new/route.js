import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveBudget(formValues) {
      let budget = this.store.createRecord('budget', formValues);

      budget.save().then(() => {
        this.transitionTo('budgets.index');
      });
    },
  },
});
