'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let result = true;

    for (let i = 0; i < this.length; i += 1) {
      if (!callback(this[i], i, this)) {
        result = false;
      }
    }

    return result;
  };
}

module.exports = applyCustomEvery;
