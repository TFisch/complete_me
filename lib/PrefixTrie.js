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
    let currentNode = this.rootNode;


        //temp variable for root node
        //temp variable for root node children
        // let currentChild = this.rootNode.children;
        
        for(let i=0; i < splitData.length; i++) {
          let currentLetter = splitData[i];
          if (!currentNode.children[currentLetter]) {
            let newLetter =  new Node(currentLetter);
            currentNode.children[currentLetter] = newLetter;
            currentNode = currentNode.children[currentLetter];
          } else {
            currentNode.children[currentLetter] = currentLetter;
          }

      }
    }
    
  

}