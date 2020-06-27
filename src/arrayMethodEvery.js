'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  Array.prototype.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
