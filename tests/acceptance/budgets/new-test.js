import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | budgets/new');

test('visiting new budget page does not redirect', function(assert) {
  visit('/new');

  andThen(function() {
    assert.equal(currentURL(), '/new');
    assert.equal(currentRouteName(), 'budgets.new');
  });
});

test('User can see form for new budget', function(assert) {
  visit('/new');

  andThen(function() {
    findWithAssert('.budget-input__name');
    findWithAssert('.budget-input__start-date');
    findWithAssert('.budget-input__remaining');
    findWithAssert('.budget-submit-btn');

    // Beacuse apparently findWithAssert isn't really an assertion?
    assert.ok(true);
  });
});

test('User can create a new budget', function(assert) {
  visit('/new');
  fillIn('.budget-input__name', 'Video Game');
  fillIn('.budget-input__start-date', '12/15/15');
  fillIn('.budget-input__remaining', '+$1,000,000');
  click('.budget-submit-btn');

  andThen(function() {
    assert.equal(currentURL(), '/');
    let items = find('.budget-list-item');
    let firstItem = items.first();

    assert.equal(items.length, 1, 'There should be the new budget in the list');
    assert.equal(server.db.budgets.length, 1, 'There should be the new budget saved to the server');

    assert.equal(firstItem.find('.budget-list-item__name').text(), 'Video Game');
    assert.equal(firstItem.find('.budget-list-item__start-date').text(), '12/15/15');
    assert.equal(firstItem.find('.budget-list-item__remaining').text(), '+$1,000,000');
  });
});
