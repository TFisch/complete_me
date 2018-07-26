const Node = require('./Node');
module.exports = class PrefixTrie {
  constructor() {
    this.rootNode = new Node(null);
    this.count = 0;
  }

  insert(data) {
    this.count ++;
    const splitData = [...data.toUpperCase()];
    let currentNode = this.rootNode; 
    let index = 0;

    splitData.forEach(currentLetter => {
      if (!currentNode.children[currentLetter]) {
        let newLetter = new Node();

        currentNode.children[currentLetter] = newLetter;
        currentNode = currentNode.children[currentLetter];
        index++;
      
      } else {
        currentNode = currentNode.children[currentLetter];
        index++;

      }
      if (index === splitData.length) {
        currentNode.endOfWord = true;
      }
    });
  }
      
  suggest(prefix) {
    const letters = [...prefix.toUpperCase()];
    let currentNode = this.rootNode;
    let suggestionsArray = [];

    for (let i = 0; i < letters.length; i++ ) {
      currentNode = currentNode.children[letters[i]];
      if (!currentNode) {
        return [];
      } 
    }
    
    getWords(prefix, currentNode);

    function getWords(stringsSoFar, node) {
      Object.keys(node.children).forEach(key => {
        let newString = stringsSoFar + key;

        if (node.children[key].endOfWord) {
          suggestionsArray.push(newString);
        }
        getWords(newString, node.children[key]);
      });
    }
    return suggestionsArray;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }

  delete(word) {
    let letters = [...word];
    let currentNode = this.rootNode;
    
    letters.forEach(letter => {
      currentNode = currentNode.children[letter]; 
    })

    currentNode.endOfWord = false;
    this.count --
  }


}