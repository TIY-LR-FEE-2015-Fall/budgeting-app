import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('User can visit /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('User can see login form', function(assert) {
  visit('/login');

  andThen(function() {
    var email = find('[name=email]');
    var password = find('[name=password]');

    assert.equal(email.length, 1, 'There should be an email field');
    assert.equal(password.length, 1, 'There should be an password field');
  });
});

test('User can login with valid credentials', function(assert) {
  visit('/login');
  fillIn('[name=email]', 'valid@example.com');
  fillIn('[name=password]', 'password1234');
  click('.login-submit-btn');

  andThen(function() {
    assert.equal(currentURL(), '/', 'User should be redirected after login');
  });
});

test('User cannot login with invalid credentials', function(assert) {
  visit('/login');
  fillIn('[name=email]', 'invalid@example.com');
  fillIn('[name=password]', 'password1234');
  click('.login-submit-btn');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'User should be not redirected because they are wrong');
  });
});
