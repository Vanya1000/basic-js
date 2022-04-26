const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let altOptions = {
    repeatTimes: 1,
    separator: '+',
    additionSeparator: '|',
    additionRepeatTimes: 1,
    addition: ''
  }
  let comleteAdditionRepeat;
  str = String(str);
  if (options.addition !== undefined) {
    comleteAdditionRepeat = repeat(
      options.addition !== undefined ? String(options.addition) : '',
      options.additionRepeatTimes ? options.additionRepeatTimes : altOptions.additionRepeatTimes,
      options.additionSeparator ? options.additionSeparator : altOptions.additionSeparator)
  }

  if (!!comleteAdditionRepeat) {
    comleteAdditionRepeat = str + comleteAdditionRepeat;
  }

  let compleateAllRepeat = repeat(
    options.addition !== undefined ? comleteAdditionRepeat : String(str),
    options.repeatTimes ? options.repeatTimes : altOptions.repeatTimes,
    options.separator ? options.separator : altOptions.separator)

  function repeat(string, n, sep) {
    return new Array(n).fill(string).join(sep);
  }
  return compleateAllRepeat;
}

module.exports = {
  repeater
};
