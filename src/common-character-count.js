const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
getCommonCharacterCount("aabcc", "adcaa");
function getCommonCharacterCount(s1, s2) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    const element = s1.charAt(i);
    if (map.get(element) > 0) {
      map.set(element, map.get(element) + 1)
    }
    else {
      map.set(element, 1);
    }
  }
  for (let i = 0; i < s2.length; i++) {
    const element = s2.charAt(i);
    if (map.get(element) > 0) {
      count++;
      map.set(element, map.get(element) - 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
