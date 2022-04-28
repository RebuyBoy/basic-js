const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 @example
 
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
];

function getDNSStats(domains) {
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let input = domains[i];
    let newInput = "";
    while (input.lastIndexOf(".") > 0) {
      const index = input.lastIndexOf(".");
      const part = input.substring(index);
      input = input.substring(0, index);
      newInput += part;
      isParamExists(result, newInput);
    }
    newInput += "." + input;
    isParamExists(result, newInput);
  }
  return result;
}
function isParamExists(obj, param) {
  param in obj ? obj[param] = obj[param] + 1 : obj[param] = 1;
}

module.exports = {
  getDNSStats
};
