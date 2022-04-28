const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = "";
  members = members
    .filter(elem => typeof elem === 'string')
    .map(elem => elem.trim().charAt(0).toUpperCase())
    .sort()

  for (let i = 0; i < members.length; i++) {
    result = result + members[i];
  }
  return result;
}

module.exports = {
  createDreamTeam
};
