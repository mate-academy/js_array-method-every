'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let count = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        count++;
      }
    }

    return count === this.length;
  };
}

module.exports = applyCustomEvery;
