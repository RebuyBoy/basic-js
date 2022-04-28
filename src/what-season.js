const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * 
 * 
 */
getSeason("sdfsdf") // => 'spring'
// getSeason() // => 'spring'

function getSeason(date) {
  console.log(typeof date);
  if (typeof date === "undefined") {
    throw new NotImplementedError("Unable to determine the time of year!");
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new NotImplementedError("Invalid date!");
  }

  const month = date.getMonth();
  let result = "";
  if (month === 11 || month === 0 || month === 1) {
    result = "winter";
  } else if (month >= 2 && month <= 4) {
    result = "spring";
  } else if (month >= 5 && month <= 7) {
    result = "summer";
  } else if (month >= 8 && month <= 10) {
    result = "autumn";
  }
  console.log(result);
  return result;
}
module.exports = {
  getSeason
};
