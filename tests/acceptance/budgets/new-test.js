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
