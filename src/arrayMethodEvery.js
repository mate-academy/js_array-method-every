'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const isSatisfied = callback(this[i], i, this);
      if (!isSatisfied) {
        return isSatisfied;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
