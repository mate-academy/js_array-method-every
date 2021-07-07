'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      let someElement = this[i];
      if (!callback(someElement, i, this)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
