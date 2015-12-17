import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | budget detail', {
  beforeEach() {
    login();
    server.create('budget', {name: 'Fruit', startDate: '1/1/12', startingAmount: 100, transactions: [1, 2]});
    server.create('transaction', {budget: 1, amount: -10});
    server.create('transaction', {budget: 1, amount: -20});
  },
});

test('User can visit budget detail url', function(assert) {
  visit('/1');

  andThen(function() {
    assert.equal(currentRouteName(), 'budgets.detail');
    assert.equal(currentURL(), '/1');
  });
});

test('User can see budget details', function(assert) {
  visit('/1');

  andThen(function() {
    var budgetName = findWithAssert('.budget-detail-name');
    var budgetRemaining = findWithAssert('.budget-detail-remaining');
    var budgetTransactions = findWithAssert('.budget-transaction');
    var firstTransaction = budgetTransactions.first().find('.budget-transaction-amount');

    assert.equal(budgetName.text(), 'Fruit');
    assert.equal(budgetRemaining.text(), '+$70');
    assert.equal(budgetTransactions.length, 2, 'There should be two budget transactions listed');
    assert.equal(firstTransaction.text(), '-$10');
  });
});

test('User can add new transaction', function(assert) {
  visit('/1');
  fillIn('.budget-new-transaction-amount', 10);
  click('.budget-new-submit');

  andThen(function() {
    var budgetRemaining = findWithAssert('.budget-detail-remaining');
    var budgetTransactions = findWithAssert('.budget-transaction');
    var firstTransaction = budgetTransactions.last().find('.budget-transaction-amount');

    assert.equal(server.db.transactions.length, 3, 'New transaction should save to DB');
    assert.equal(budgetRemaining.text(), '+$80');
    assert.equal(budgetTransactions.length, 3, 'There should be three budget transactions listed');
    assert.equal(firstTransaction.text(), '+$10');
  });
});
