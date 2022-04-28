const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
encodeLine("aabbbc");
encodeLine("aaaatttt");
encodeLine("abbcca");
encodeLine("xyz");
encodeLine("");
function encodeLine(str) {
  let char = str.charAt(0);
  let result = "";
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    } else {
      if (count > 1) {
        result = result + count;
        count = 1;
      }
      result = result + char;
      char = str.charAt(i);
    }
  }
  if (count === 1) {
    result = result + char;
  }
  if (count > 1) {
    result = result + count + char;
  }
  console.log(result);
  return result;
}

module.exports = {
  encodeLine
};
