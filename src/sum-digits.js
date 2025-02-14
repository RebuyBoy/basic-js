const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

// console.log(getSumOfDigits(100));
// console.log(getSumOfDigits(91));
// console.log(getSumOfDigits(93));

function getSumOfDigits(n) {
  let sum = 0;
  while (n > 9) {
    n = getSum(n);
  }
  return sum + n;
}
function getSum(n) {
  let sum = 0;
  while (n > 9) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }
  return sum + n;
}

module.exports = {
  getSumOfDigits
};
