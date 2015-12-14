import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | budgets/index');

test('visiting / shows all budgets', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    // This may change over time
    assert.equal(currentRouteName(), 'budgets.index');
  });
});

test('User can see a list of budgets', function(assert) {
  visit('/');

  andThen(function() {
    let items = findWithAssert('.budget-list-item');
    let firstItem = items.first();

    assert.equal(items.length, 3, 'There should be three budgets in the list');

    assert.equal(firstItem.find('.budget-list-item__name').text(), 'Groceries');
    assert.equal(firstItem.find('.budget-list-item__start-date').text(), '12/1/15');
    assert.equal(firstItem.find('.budget-list-item__remaining').text(), '+$100');
  });
});
