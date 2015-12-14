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
