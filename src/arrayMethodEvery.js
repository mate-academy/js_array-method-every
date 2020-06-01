'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    // write code here
    let passes = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        passes++;
      }
    }

    return passes === this.length;
  };
}

module.exports = applyCustomEvery;
