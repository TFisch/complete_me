import Node from './Node';
require('locus')
export default class PrefixTrie {
  constructor() {
    this.rootNode = new Node(null);
    this.count = 0;
  }

  insert(data) {
    this.count ++;
    const splitData = [...data];
    splitData.forEach(letter => {
        //temp variable for root node
        let currentNode = this.rootNode;
        //temp variable for root node children
        let currentChild = this.rootNode.children;
        
        if (!this.rootNode.children[letter]) {
          this.rootNode.children[letter] = new Node(letter);
        }
        //reassign rootnode 
        this.rootNode = this.rootNode.children[letter];
        //reassign children
        
      })
    
  }



}