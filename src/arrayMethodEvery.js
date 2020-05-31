'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        counter += 1;
      }
    }

    return counter === this.length;
  };
}

module.exports = applyCustomEvery;
