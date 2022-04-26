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
function encodeLine(str) {
  let acc = 1;
  let result = str.split('').map((item, index, arr) => {
    if (item !== arr[index + 1]) {
      if (acc === 1) {
        return item;
      } else {
        let el = acc + item;
        acc = 1;
        return el;
      }
    } else {
      acc++;
    }

  })
  return result.join('');//?
}

module.exports = {
  encodeLine
};
