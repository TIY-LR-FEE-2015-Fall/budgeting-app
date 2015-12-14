import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {name: 'Groceries', startDate: '12/1/15', remaining: '+$100'},
      {name: 'Entertainment', startDate: '12/1/15', remaining: '+$20'},
      {name: 'Christmas Gifts', startDate: '12/1/15', remaining: '+$120'},
    ];
  },
});
