'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let valueEvery = true;

    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        valueEvery = false;
      }
    }

    return valueEvery;
  };
}

module.exports = applyCustomEvery;
