'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      return !!callback(this[i], i, this);
    }

    return !0;
  };
}

module.exports = applyCustomEvery;
