import Ember from 'ember';

export function mathAbs([num]/*, hash*/) {
  return Math.abs(num);
}

export default Ember.Helper.helper(mathAbs);
