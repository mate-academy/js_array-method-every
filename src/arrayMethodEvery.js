'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    if (!arguments) {
      return false;
    }

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
