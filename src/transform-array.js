const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error('\'arr\' parameter must be an instance of the Array!'); }
  let newSlice = arr.slice();

  for (let i = 0; i < newSlice.length; i++) {
    if (typeof newSlice[i] === 'string') {
      if (newSlice[i] === '--discard-next') {
        let index = newSlice.indexOf('--discard-next');
        if (index === newSlice.length - 1) {
          newSlice.splice(index, 1);
        } else {
          newSlice.splice(index, 2, '--');
        }

      } else if (newSlice[i] === '--discard-prev') {
        let index = newSlice.indexOf('--discard-prev');
        if (index === 0) {
          newSlice.splice(index, 1);
        } else {
          newSlice.splice(index - 1, 2, '--');
        }
      } else if (newSlice[i] === '--double-next') {
        let index = newSlice.indexOf('--double-next');
        if (index === newSlice.length - 1) {
          newSlice.splice(index, 1);
        } else {
          newSlice[index] = newSlice[index + 1];
        }
      } else if (newSlice[i] === '--double-prev') {
        let index = newSlice.indexOf('--double-prev');
        if (index === 0) {
          newSlice.splice(index, 1);
        } else {
          newSlice[index] = newSlice[index - 1];
        }
      }
    }
  }

  if (newSlice.includes('--double-prev') || newSlice.includes('--discard-next') || newSlice.includes('--double-next') || newSlice.includes('--discard-prev')) {//?
    return transform(newSlice)
  }
  return newSlice.filter(item => item !== '--');
}
module.exports = {
  transform
};
