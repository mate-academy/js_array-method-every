'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === false) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
