import { expect } from 'chai';
import Node from '../lib/Node';
import NameTrie from '../lib/NameTrie';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new NameTrie();
  });

  it('should set its default root to null', () => {
    expect(trie.rootNode).to.eq(null);
  })

  describe('insert', () => {
    it('should be able to add a node to the Trie', () => {
      trie.insert('d');

      expect(trie.rootNode.data).to.equal('d');
    });
  })  

 
 
 
  describe('breakWord', () => {  
    it('should break up a word into individual letters', () => {
      let trie = new Trie();

      trie.breakWord('douglas');

      expect(trie.rootNode.data).to.equal('d');
      expect(trie.rootNode.data).to.equal('o');
      expect(trie.rootNode.data).to.equal('u');
      expect(trie.rootNode.data).to.equal('g');
      expect(trie.rootNode.data).to.equal('l');
      expect(trie.rootNode.data).to.equal('a');
      expect(trie.rootNode.data).to.equal('s');

    })   
  });



})

