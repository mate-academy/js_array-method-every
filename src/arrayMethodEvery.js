'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    if (this.length === 0) {
      return true;
    }

    let result = true;

    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        result = false;
        break;
      }
    }

    return result;
  };
}

module.exports = applyCustomEvery;
