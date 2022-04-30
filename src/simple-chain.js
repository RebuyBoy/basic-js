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
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position >= this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainResult = "";
    this.chain.forEach(element => {
      chainResult = chainResult.concat(`~~${element}`);
    });
    this.chain = [];
    return chainResult.substring(2);
  },
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//, '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

module.exports = {
  chainMaker
};
