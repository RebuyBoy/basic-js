const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(direct) {
    this.isDirect = direct;
  }
  encrypt(data, key) {
    if (arguments.length < 2 || data === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let keyIndex = 0;
    let result = "";
    for (let i = 0; i < data.length; i++) {
      let dataChar = data.charAt(i);
      if (/[A-Za-z]/.test(dataChar)) {
        dataChar = dataChar.toUpperCase();
        const keyChar = key.charAt(keyIndex).toUpperCase();
        keyIndex = keyIndex + 1 > key.length - 1 ? 0 : keyIndex + 1;
        let index = alphabet.indexOf(dataChar.toUpperCase()) + alphabet.indexOf(keyChar);
        index = index > alphabet.length - 1 ? index - alphabet.length : index;
        dataChar = alphabet.charAt(index);
      }
      result = result.concat(dataChar);
    }
    if (this.isDirect === false) {
      result = result.split("").reverse().join("");
    }
    return result;

  }
  decrypt(data, key) {
    if (arguments.length < 2 || data === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let keyIndex = 0;
    let result = "";
    for (let i = 0; i < data.length; i++) {
      let dataChar = data.charAt(i);
      if (/[A-Za-z]/.test(dataChar)) {
        dataChar = dataChar.toUpperCase();
        const keyChar = key.charAt(keyIndex).toUpperCase();
        keyIndex = keyIndex + 1 > key.length - 1 ? 0 : keyIndex + 1;
        let index = alphabet.indexOf(dataChar.toUpperCase()) - alphabet.indexOf(keyChar);
        index = index < 0 ? alphabet.length + index : index;
        dataChar = alphabet.charAt(index);
      }
      result = result.concat(dataChar);
    }
    if (this.isDirect === false) {
      result = result.split("").reverse().join("");
    }
    return result;

  }
}

module.exports = {
  VigenereCipheringMachine
};
