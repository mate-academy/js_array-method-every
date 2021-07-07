'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    // write code here

    if (typeof callback !== 'function') {
      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
          return false;
        }
      }

      return true;
    }
  };
}

module.exports = applyCustomEvery;
