'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback) {
    return !this.map((item, index, arr) => callback(item, index, arr)).includes(false);
  };
}

module.exports = applyCustomEvery;
