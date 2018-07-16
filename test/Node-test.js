import { expect } from 'chai';
import Node from '../lib/Node';
import Trie from '../lib/PrefixTrie';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza');
  });

  it('should exist', () => {
    expect(node).to.exist;
  });

  it('should have an empty object for a children property', () => {
    expect(node.children).to.be.an('object');
  });

  it('should have an endOfWord property, set to false', () => {
    expect(node.endOfWord).to.equal(false);
  });
});