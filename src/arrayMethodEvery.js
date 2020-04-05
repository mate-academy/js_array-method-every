'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    const items = this;
    let count = 0;

    if (items.length < 1) {
      return true;
    }

    for (let i = 0; i < items.length; i++) {
      if (callback(items[i], i, items)) {
        count++;
      }
      if (count === items.length) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomEvery;
