'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    let res = true;
    for (let i = 0; i < this.length; i++) {
      res = res && callback(this[i], i, this);
    }
    return res;
  };
}

module.exports = applyCustomEvery;
