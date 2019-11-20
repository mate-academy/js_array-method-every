'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    if (this.length === 0) {
      return true;
    }
    for (let i = 0; i < this.length; i++) {
      if (this.length > 0) {
        return callback(this[i], i, this);
      }
    }
    return false;
  };
}

module.exports = applyCustomEvery;
