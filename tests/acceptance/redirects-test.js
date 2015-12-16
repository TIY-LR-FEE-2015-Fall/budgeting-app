import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | redirects');

test('Not logged in user is redirected to login after trying to access budgets', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('Logged in user is redirected to budgets after trying to access login', function(assert) {
  // Login the user before running test
  login();

  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
