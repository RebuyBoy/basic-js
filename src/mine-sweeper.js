const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]
// minesweeper(matrix);

// matrix = [
//   [false, false, false],
//   [false, false, false],
// ]
// minesweeper(matrix);

function minesweeper(matrix) {
  let result = matrix.slice();

  for (let i = 0; i < matrix.length; i++) {
    result[i] = matrix[i].slice().fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (Array.isArray(matrix[i - 1])) {
          rightTop = result[i - 1][j + 1];
          leftTop = result[i - 1][j - 1];

          if (rightTop >= 0)
            result[i - 1][j + 1]++;
          if (leftTop >= 0) {
            result[i - 1][j - 1]++;
          }
          result[i - 1][j]++;
        }
        if (Array.isArray(matrix[i + 1])) {
          let rightDown = result[i + 1][j + 1];
          let leftDown = result[i + 1][j - 1];
          if (rightDown >= 0) {
            result[i + 1][j + 1]++;
          }
          if (leftDown >= 0) {
            result[i + 1][j - 1]++;
          }
          result[i + 1][j]++;
        }
        let left = result[i][j - 1];
        let right = result[i][j + 1];
        if (left >= 0) {
          result[i][j - 1]++;
        }
        if (right >= 0) {
          result[i][j + 1]++;
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
