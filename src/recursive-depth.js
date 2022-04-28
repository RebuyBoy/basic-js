const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 */

class DepthCalculator {
  calculateDepth(array) {
    let result = 1;
    let current = 1;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (Array.isArray(element)) {
        current += this.calculateDepth(element);
      }
      result = Math.max(result, current);
      current = 1;
    }
    return result;
  }
}

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) //=> 3
// depthCalc.calculateDepth([1, 2, 3, 4, 5])// => 1
// depthCalc.calculateDepth([1, 2, 3, [4, 5]])// => 2

module.exports = {
  DepthCalculator
};
