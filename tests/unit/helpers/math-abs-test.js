import { mathAbs } from '../../../helpers/math-abs';
import { module, test } from 'qunit';

module('Unit | Helper | math abs');

// Replace this with your real tests.
test('it works with positive numbers', function(assert) {
  let result = mathAbs([42]);
  assert.equal(result, 42);
});

test('it works with negative numbers', function(assert) {
  let result = mathAbs([-42]);
  assert.equal(result, 42);
});
