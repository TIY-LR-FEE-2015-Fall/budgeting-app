import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | budgets/edit', {
  beforeEach() {
    login();
  },
});

test('visiting /budgets/edit', function(assert) {
  server.createList('budget', 1);
  visit('/1/edit');

  andThen(function() {
    assert.equal(currentURL(), '/1/edit');
  });
});

test('User can see form for editing budget', function(assert) {
  server.create('budget', {name: 'Fruit', startDate: '1/1/12', startingAmount: '50'});
  visit('/1/edit');

  andThen(function() {
    let name = findWithAssert('.budget-input__name');
    let startDate = findWithAssert('.budget-input__start-date');
    let startingAmount = findWithAssert('.budget-input__startingAmount');
    findWithAssert('.budget-submit-btn');

    assert.equal(name.val(), 'Fruit');
    assert.equal(startDate.val(), '1/1/12');
    assert.equal(startingAmount.val(), '50');
  });
});

test('User can change existing budget', function(assert) {
  server.create('budget', {name: 'Fruit', startDate: '1/1/12', remaining: '+$50'});
  visit('/1/edit');

  fillIn('.budget-input__name', 'Vegetables');
  fillIn('.budget-input__start-date', '00/01/05');
  fillIn('.budget-input__startingAmount', '10');
  click('.budget-submit-btn');

  andThen(function() {
    assert.equal(currentURL(), '/');
    let items = find('.budget-list-item');
    let firstItem = items.first();

    assert.equal(items.length, 1, 'There should be no new budget in the list');
    assert.equal(server.db.budgets[0].name, 'Vegetables', 'The budget should be saved to the server');

    assert.equal(firstItem.find('.budget-list-item__name').text(), 'Vegetables');
    assert.equal(firstItem.find('.budget-list-item__start-date').text(), '00/01/05');
    assert.equal(firstItem.find('.budget-list-item__remaining').text(), '+$10');
  });
});
