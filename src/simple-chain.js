const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  size: 0,

  getLength() {
    return this.size;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    this.size++;
    return this;
  },
  removeLink(position) {
    if (position < 1 || position >= this.chain.length || typeof position !== 'number') {
      throw new NotImplementedError('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    this.size--;
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
    this.size = 0;
    return chainResult.substring(2);
  },
};

console.log(chainMaker.addLink(true).addLink(false).addLink(3).removeLink(1).finishChain());
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'));
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink("2nd").reverseChain().finishChain());//, '( 3rd )~~( function () { } )');
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain() === '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
// console.log(chainMaker.addLink('ABC').reverseChain().addLink(Infinity).addLink(null).addLink('8.963').addLink(false).addLink(Infinity).reverseChain().addLink(false).reverseChain().finishChain() === '( false )~~( ABC )~~( Infinity )~~( null )~~( 8.963 )~~( false )~~( Infinity )');
// console.log(chainMaker.addLink(Infinity).reverseChain().addLink(false).reverseChain().addLink(NaN).reverseChain().reverseChain().reverseChain().reverseChain().addLink(333).finishChain() === '( false )~~( Infinity )~~( NaN )~~( 333 )');
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
// console.log(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain() === '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');
module.exports = {
  chainMaker
};
