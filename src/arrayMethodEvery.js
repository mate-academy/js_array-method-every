'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i += 1) {
      const isTestPassed = callback(this[i], i, this);

      if (!isTestPassed) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
