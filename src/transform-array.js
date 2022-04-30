const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// transform([1, 2, 3, '--discard-prev', 4, 5])
// //  [1, 2, 4, 5]
// transform([1, 2, 3, '--double-next', 4, 5])
// //  => [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, '--double-prev', 4, 5])
// // to deeply equal [ 1, 2, 3, 4, 5 ])
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === 'string') {
      if (a[i] === '--double-next') {
        i === a.length - 1 ? a.pop() : a[i] = a[i + 1];
      }
      if (a[i] === '--discard-next') {
        let elemsRemove = 2;
        if (a[i + 2] === "--double-prev" || a[i + 2] === "--discard-prev") {
          elemsRemove++;
        }
        i === a.length - 1 ? a.pop() : a.splice(i, elemsRemove);
      }
      if (a[i] === '--double-prev') {
        i === 0 ? a.shift() : a[i] = a[i - 1];
      }
      if (a[i] === '--discard-prev') {
        i === 0 ? a.shift() : a.splice(i - 1, 2);
      }
    }
  }
  return a;
}

module.exports = {
  transform
};
