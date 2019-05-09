'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    if (this.length === 0) {
      return true;
    }
    let i = 0;
    while (true) {
      if (!callback(this[i], i, this)) {
        return false;
      }
      i++;
      if (i >= this.length) {
        break;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
