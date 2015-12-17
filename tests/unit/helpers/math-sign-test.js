import { mathSign } from '../../../helpers/math-sign';
import { module, test } from 'qunit';

module('Unit | Helper | math sign');

// Replace this with your real tests.
test('it works for positive numbers', function(assert) {
  let result = mathSign([42]);
  assert.equal(result, '+');
});

test('it works for negative numbers', function(assert) {
  let result = mathSign([-42]);
  assert.equal(result, '-');
});

test('it works for zero', function(assert) {
  let result = mathSign([0]);
  assert.equal(result, '');
});
