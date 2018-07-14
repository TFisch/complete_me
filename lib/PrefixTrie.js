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
        for (let i=0; i < splitData.length; i++) {
          let currentLetter = splitData[i];
          if (!currentNode.children[currentLetter]) {
            let newLetter = new Node(currentLetter);
            currentNode.children[currentLetter] = newLetter;
            currentNode = currentNode.children[currentLetter];
          } else {
            currentNode = currentNode.children[currentLetter];
          }
        }
            if(!currentNode.endOfWord){
              currentNode.endOfWord = true;
            }
      }
      
  suggest(prefix) {
    const letters = [...prefix];
    let currentNode = this.rootNode;
    for(let i = 0; i < letters.length; i++ ) {
      //going down to the last letter in the prefix
      currentNode = currentNode.children[letters[i]];
      //if that node doesnt exist, return an empty array
      if(!currentNode){
        return [];
      }
    }
    let suggestionsArray = [];
    
    getWords(prefix, currentNode);

    function getWords(stringsSoFar, node) {
      Object.keys(node.children).forEach(key => {
        let newString = stringsSoFar + key;
        //if its at the end of the word, push in the match 
        if (node.children[key].endOfWord) {
          suggestionsArray.push(newString);
        }
        //moving the node down and adding letter to the string
        getWords(newString, node.children[key])
      })
    }
    return suggestionsArray;

  }

}