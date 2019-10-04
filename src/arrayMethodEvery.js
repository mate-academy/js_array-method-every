'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    const func = callback;
    const arr = this;
    if (arr.length === 0) {
      return true;
    }
    for (let i = 0; i < arr.length; i++) {
      return func(arr[i], i, arr);
    }
  };
}

module.exports = applyCustomEvery;
