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
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));
  for (let j = 0; j < matrix.length; j++) {
    for (let n = 0; n < matrix[0].length; n++) {
      let count = 0;
      if (j < matrix.length - 1 && n < matrix.length - 1) {
        if (matrix[j + 1][n + 1]) {
          count++
        }
      }
      if (j > 0 && n > 0) {
        if (matrix[j - 1][n - 1]) {
          count++
        }
      }
      if (j > 0 && n < matrix.length - 1) {
        if (matrix[j - 1][n + 1]) {
          count++
        }
      }
      if (j < matrix.length - 1 && n > 0) {
        if (matrix[j + 1][n - 1]) {
          count++
        }
      }
      if (j > 0) {
        if (matrix[j - 1][n]) {
          count++
        }
      }
      if (n > 0) {
        if (matrix[j][n - 1]) {
          count++
        }
      }
      if (j < matrix.length - 1) {
        if (matrix[j + 1][n]) {
          count++
        }
      }
      if (n < matrix.length - 1) {
        if (matrix[j][n + 1]) {
          count++
        }
      }
      count//?
      result[j][n] = count;

    }
  }
  return result;
}

module.exports = {
  minesweeper
};
