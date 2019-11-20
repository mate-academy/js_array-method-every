'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let countTrue = 0;
    if (this.length === 0) {
      return true;
    }
    for (let i = 0; i < this.length; i++) {
      if ((callback(this[i], i, this))) {
        countTrue++;
      }
    }
    if (countTrue === this.length) {
      return true;
    }

    return false;
  };
}

module.exports = applyCustomEvery;
