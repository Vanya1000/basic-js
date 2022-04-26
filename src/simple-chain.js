const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof (value) === undefined) {
      this.chain.push('')
    } else {
      let strValue = String(value);
      this.chain.push(strValue);
    }
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || !isFinite(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain = this.chain.filter((item, index) => index !== (position - 1))//?
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain//?
    this.chain[0] = `( ${this.chain[0]}`
    this.chain[this.chain.length - 1] = `${this.chain[this.chain.length - 1]} )`
    let result = this.chain.join(' )~~( ');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
