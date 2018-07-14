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

    it('should keep count of multiple words entered', () => {
      trie.insert('horse');
      trie.insert('gopher');
      trie.insert('goal');
      trie.insert('telephone');
      expect(trie.count).to.equal(4);
    })

  })
  
  describe('insert', () => {
    it('should be able to add a node to the Trie', () => {
      trie.insert('d');
      expect(trie.rootNode.children).to.equal('d');
    });
  
    it.skip('should enter the letters of the word to the trie as children', () => {
      const node = Node
      trie.insert('dog');
      expect(trie.rootNode.children).to.equal('d');
      expect(trie.rootNode.children.d.children).to.equal('o');
      expect(trie.rootNode.children.d.children.o.children).to.equal('g');

    })
  
  })  

  describe('suggest', () => {
    it('should have a suggest method', () => {

      trie.suggest('pi');
      expect(trie).respondsTo('suggest');
    });
    
    it('should take in a prefix', () => {
      trie.suggest('pi');
      expect(trie).respondsTo('suggest');
    })
    
    it('should return an empty array if there are no words containing that prefix', () => {
      trie.insert('cook');
      trie.insert('cane');

      expect(trie.suggest('cx')).to.deep.equal([]);
    })
  
    it.only('should return an array of all the words containing a prefix', () => {
      trie.insert('corny');
      trie.insert('cords');
      trie.insert('cents');
      trie.insert('call');

      expect(trie.suggest('c')).to.deep.equal(['corny', 'cords', 'cents', 'call']);

    })
  
  
  }) 
})

