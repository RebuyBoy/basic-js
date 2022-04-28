const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 */
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// sortByHeight([4, 2, 9, 11, 2, 16]);
// [2, 2, 4, 9, 11, 16],


// The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight(arr) {
  const arrWithoutMinusOne = arr.filter(element => element !== -1).sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element !== -1) {
      arr[i] = arrWithoutMinusOne.shift();
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
