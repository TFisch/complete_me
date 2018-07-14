
export default class Node {
  constructor(letter) {
    this.letter = letter;
    this.endOfWord = false;
    this.children = {};
  }
}