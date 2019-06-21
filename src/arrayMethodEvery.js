'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    // write code here
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (callback(this[i], i, this) !== true) {
        return false;
      }
    };
    return true;
  };
}

module.exports = applyCustomEvery;
