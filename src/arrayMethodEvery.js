'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    // write code here
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) !== true) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
