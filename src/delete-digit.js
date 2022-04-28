const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
console.log(deleteDigit(652));
function deleteDigit(n) {
  let result = "";
  if (n > 9) {
    let arr = n.toString().split("");
    let index = arr.length - 1;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        index = i;
      }
    }
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }
  }
  return parseInt(result);
}
module.exports = {
  deleteDigit
};
