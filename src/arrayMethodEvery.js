'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    const items = this;

    for (let i = 0; i < items.length; i++) {
      if (!callback(items[i], i, items)) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
