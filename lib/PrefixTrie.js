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
    // splits word into individal letters
    let currentNode = this.rootNode;
    //sets current node equal to value of root(null)
        for (let i=0; i < splitData.length; i++) {
          //for loop that is runnging for length of the word
          let currentLetter = splitData[i];
          //currentLetter is set to Letter interating through the word
          if (!currentNode.children[currentLetter]) {
            //checks if there is not a currentNode with a children 
            //property with a value of the current letter
            let newLetter = new Node(currentLetter);
            //if there is not, newLetter is created as a new Node of the currentLetter
            currentNode.children[currentLetter] = newLetter;
            //the children property of the current node is set to the 
            currentNode = currentNode.children[currentLetter];
          } else {
            currentNode.children[currentLetter] = currentLetter;
          }
          
        }
            if(!currentNode.endOfWord){
              currentNode.endOfWord = true;
            }
      }
      
  

}