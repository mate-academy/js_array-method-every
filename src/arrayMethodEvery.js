'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const index = i;

      if (!callback(item, index, arr)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
