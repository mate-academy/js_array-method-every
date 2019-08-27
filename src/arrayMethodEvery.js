'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let i = 0;
    while (i < this.length) {
      if (!callback(this[i], i, this)) {
        return false;
      }
      i++;
    }

    return true;
  };
}

module.exports = applyCustomEvery;
