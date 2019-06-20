'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        return true;
      } else if (this[i] !== callback(this[i], i, this)) {
        return false;
      }
    }

    return true;
  };
}

module.exports = applyCustomEvery;
