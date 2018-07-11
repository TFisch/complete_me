import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/Trie'

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should start with zero elements', () => {
    expect(trie.length).to.eq(0);
  });

  it('should set its default root to null', () => {
    expect(trie.root).to.eq(null);
  })


})

