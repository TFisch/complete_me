require("locus")
import { expect } from 'chai';
import Node from '../lib/Node';
import PrefixTrie from '../lib/PrefixTrie';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new PrefixTrie();
  });


  describe('count', () => {
    it('should keep count of how many words have been inserted', () => {
      trie.insert('breakfast');

      expect(trie.count).to.equal(1);
    })

    it('should equal zero, if nothing has been inserted', () => {
      
      expect(trie.count).to.equal(0);
    })

    it.only('should keep count of multiple words entered', () => {
      trie.insert('horse');
      trie.insert('gopher');
      trie.insert('goat');
      trie.insert('telephone');
      console.log(JSON.stringify(trie, null, 4));
      expect(trie.count).to.equal(4);
    })

  })
  
  
  
  
  
  
  
  describe('insert', () => {
    it.skip('should be able to add a node to the Trie', () => {
      trie.insert('d');

      expect(trie.rootNode.letter).to.equal('d');
    });
  
    it.skip('should enter the letters of the word to the trie as children', () => {
      const node = Node
      trie.insert('dog');
      console.log(trie.rootNode);
      expect(trie.rootNode.children).to.equal('d');
      expect(trie.rootNode.children.d.children).to.equal('o');
      expect(trie.rootNode.children.d.children.o.children).to.equal('g');

    })
  
  })  
})

