const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(variant) {
    variant === undefined ? this.variant = true : this.variant = false;
  }
  alphabetNum = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) { throw new Error('Incorrect arguments!') }
    let strArr = str.toUpperCase().split('')
    let serial = 0;
    let similarArrKey = strArr.map(item => {
      if (item.match(/[A-Z]/)) {
        item = key[serial < key.length ? serial : serial = 0];
        serial++;
        return item.toUpperCase();
      } else {
        return item;
      }
    })
    let encriptedStr = strArr.map((item, index) => {
      if (item.match(/[A-Z]/)) {
        let itemNum = this.alphabetNum[item];
        let keyNum = this.alphabetNum[similarArrKey[index]];
        let encriptedNum = itemNum + keyNum;
        if (encriptedNum > 25) {
          encriptedNum = encriptedNum - 26;
        }
        let encriptedItem = Object.keys(this.alphabetNum).find(key => this.alphabetNum[key] === encriptedNum);
        return encriptedItem;
      } else {
        return item;
      }
    })
    return this.variant ? encriptedStr.join('') : encriptedStr.reverse().join('');
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) { throw new Error('Incorrect arguments!') }
    let strArr = str.toUpperCase().split('');
    let serial = 0;
    let similarArrKey = strArr.map(item => {
      if (item.match(/[A-Z]/)) {
        item = key[serial < key.length ? serial : serial = 0];
        serial++;
        return item.toUpperCase();
      } else {
        return item;
      }
    })
    let decriptedStr = strArr.map((item, index) => {
      if (item.match(/[A-Z]/)) {
        let itemNum = this.alphabetNum[item];
        let keyNum = this.alphabetNum[similarArrKey[index]];
        let decriptedNum = itemNum - keyNum;
        if (decriptedNum < 0) {
          decriptedNum = decriptedNum + 26;
        }
        let decriptedItem = Object.keys(this.alphabetNum).find(key => this.alphabetNum[key] === decriptedNum);
        return decriptedItem;
      } else {
        return item;
      }
    })
    return this.variant ? decriptedStr.join('') : decriptedStr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
