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
// getSeason("sdfsdf") // => 'spring'
// getSeason() // => 'spring'
// const deeperFakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//     return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//     return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//     return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//     return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//     return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//     return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//     return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//     return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// console.log(getSeason(deeperFakeDate));
// console.log(Object.keys(date));
// console.log(Object.keys(deeperFakeDate));
// const fakeDate2 = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate2, Object.getPrototypeOf(new Date()));



// let date2 = new Date(181, 9, 17, 8, 31, 33, 800);
// let a = "sdsdf";
// console.log(Object.getOwnPropertyDescriptors(fakeDate2));
// console.log(Object.getOwnPropertyDescriptors(date2));
// console.log(typeof date2);
// console.log(getSeason(date2));
// console.log(getSeason(fakeDate2));
console.log(getSeason());

function getSeason(date) {
  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  // if (Object.getOwnPropertyDescriptors(date).length > 0) {
  //   throw new Error("Invalid date!");
  // }

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
  return result;
}
module.exports = {
  getSeason
};
