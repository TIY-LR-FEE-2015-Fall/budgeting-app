let budgets = [
  {name: 'Groceries', startDate: '12/1/15', remaining: '+$100'},
  {name: 'Entertainment', startDate: '12/1/15', remaining: '+$20'},
  {name: 'Christmas Gifts', startDate: '12/1/15', remaining: '+$120'},
];

export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  budgets.forEach(function(budget) {
    server.create('budget', budget);
  });
}
