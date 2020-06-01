'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    if (this.length === 0) {
      return true;
    }

    let counter = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        counter++;
      }
    }

    return this.length === counter;
  };
}

module.exports = applyCustomEvery;
