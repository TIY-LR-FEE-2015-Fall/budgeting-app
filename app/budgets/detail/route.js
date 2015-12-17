import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addTransaction(formValues) {
      // Grab our current budget
      let budget = this.modelFor(this.routeName);

      // Make a new transaction
      let transaction = this.store.createRecord('transaction', {
        amount: formValues.amount,
        budget: budget,
      });

      // Save that transaction
      transaction.save();
    },
  },
});
