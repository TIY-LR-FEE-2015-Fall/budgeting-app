import Ember from 'ember';

export function mathSign([num]/*, hash*/) {
  if (num === 0) {
    return '';
  } else if (num < 0) {
    return '-';
  }

  return '+';
}

export default Ember.Helper.helper(mathSign);
