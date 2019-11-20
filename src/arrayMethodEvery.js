'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;
      if (callback(item, index, arr) === true) {
        continue;
      }
      return false;
    }
    return true;
  };
}

module.exports = applyCustomEvery;
