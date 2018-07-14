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

  

  })
  
  
  
  
  
  
  
  describe('insert', () => {
    it('should be able to add a node to the Trie', () => {
      trie.insert('d');

      expect(trie.rootNode.letter).to.equal('d');
    });
  
    it('should enter the letters of the word to the trie as children', () => {
      const node = Node
      trie.insert('dog');
      console.log(JSON.stringify(trie, null, 4));

      expect(trie.rootNode.children).to.equal('d');
      expect(trie.rootNode.children.d.children).to.equal('o');
      expect(trie.rootNode.children.d.children.o.children).to.equal('g');

    })
  
  })  
})

