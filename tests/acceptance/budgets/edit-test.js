import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | budgets/edit');

test('visiting /budgets/edit', function(assert) {
  server.createList('budget', 1);
  visit('/1/edit');

  andThen(function() {
    assert.equal(currentURL(), '/1/edit');
  });
});

test('User can see form for editing budget', function(assert) {
  server.create('budget', {name: 'Fruit', startDate: '1/1/12', remaining: '+$50'});
  visit('/new');

  andThen(function() {
    let name = findWithAssert('.budget-input__name');
    let startDate = findWithAssert('.budget-input__start-date');
    let remaining = findWithAssert('.budget-input__remaining');
    findWithAssert('.budget-submit-btn');

    assert.equal(name.val(), 'Fruit');
    assert.equal(startDate.val(), '1/1/12');
    assert.equal(remaining.val(), '+$50');
  });
});
