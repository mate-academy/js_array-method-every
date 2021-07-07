'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (const [index] of this.entries()) {
      if (!callback(this[index], index, this)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
