const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 */
renameFiles(["file", "file", "image", "file(1)", "file"]),
  renameFiles(["file", "file(1)", "image", "file(1)(1)", "file(2)"]);
function renameFiles(names) {
  let set = new Set();
  for (let i = 0; i < names.length; i++) {
    let elem = names[i];
    count = 1;
    if (set.has(elem)) {
      elem = elem.concat(`(${count})`)
    }
    while (set.has(elem)) {
      count++;
      elem = elem.substring(0, elem.length - 3);
      elem = elem.concat(`(${count})`);
    }
    set.add(elem);
  }
  return Array.from(set);
}

module.exports = {
  renameFiles
};
