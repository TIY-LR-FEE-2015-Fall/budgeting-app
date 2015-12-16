import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'exercise-00/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | redirects');

test('Not logged in user is redirected to login after trying to access budgets', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('Logged in user is redirected to budgets after trying to access login', function(assert) {
  // Login the user before running test
  // jscs: disable
  authenticateSession(this.application, {
    token_type: 'bearer',
    access_token: 'f1c5cb890586fea033c22b2ceff75f3fb6d37321',
    expires_in: 3600,
    refresh_token: '62fdd7267cba4e3a5784989acbd3a51f18ad0a05',
  });
  // jscs: enable

  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
