'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const isCallback = callback(this[i], i, this);

      if (!isCallback) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
