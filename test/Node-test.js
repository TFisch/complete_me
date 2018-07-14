import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/PrefixTrie'

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza');
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

})