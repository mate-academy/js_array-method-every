'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let trueCounter = 0;

    if (this.length === 0) {
      return true;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        trueCounter += 1;
      }
    }

    return trueCounter === this.length;
  };
}

module.exports = applyCustomEvery;
