import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: 'Groceries',
  startDate: '12/1/15',
  remaining: '+$100',
});
