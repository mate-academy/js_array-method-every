'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let resultEvery = true;
    let i = 0;
    while (i < this.length && resultEvery) {
      if (!callback(this[i], i, this)) {
        resultEvery = false;
      }
      i++;
    }

    return resultEvery;
  };
}

module.exports = applyCustomEvery;
