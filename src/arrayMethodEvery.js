'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const condition = callback(this[i], i, this);

      if (!condition) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
