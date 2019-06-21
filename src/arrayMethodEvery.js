'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
      if (!callback(this[index], index, this)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
