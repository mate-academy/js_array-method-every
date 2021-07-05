'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    const arr = this;
    let counter = 0;

    for (const item of arr) {
      if (!callback(item, counter, arr)) {
        return false;
      }
      counter++;
    }

    return true;
  };
}

module.exports = applyCustomEvery;
