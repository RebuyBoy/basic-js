const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// assert.equal(dateSample('1'), 22387);
// assert.equal(dateSample('9'), 4223);
// assert.equal(dateSample('11'), 2564);

// console.log(dateSample('1'));// => 22387);
// console.log(dateSample('sdf3'));//, 13305));
// assert.equal(dateSample('9.59383373526808'), 3696);
// console.log(dateSample('9.59383373526808'));
console.log(dateSample('3.142'));

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  const parse = parseFloat(sampleActivity);
  if (Number.isNaN(parse)
    || typeof parse !== "number"
    || parse < 1
    || parse > 15) {
    return false;
  }
  let a = 0.693 / 5730;
  let b = (Math.log((15 / parse)));
  return Math.ceil(b / a);
}

module.exports = {
  dateSample
};
