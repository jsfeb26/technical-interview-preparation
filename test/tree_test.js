import {expect} from 'chai';
import Tree from '../Data-Structures/tree';
import {inOrder, preOrder, postOrder} from '../Algorithms/treeTraversal';

describe('Binary Tree Tests', () => {
  it('In-Order Tree Traversal', () => {
    let tree = new Tree();
    tree.addNode(8);
    tree.addNode(5);
    tree.addNode(12);
    tree.addNode(4);
    tree.addNode(15);
    tree.addNode(10);

    inOrder(tree.root);
  });

  it('Pre-Order Tree Traversal', () => {
    let tree = new Tree();
    tree.addNode(8);
    tree.addNode(5);
    tree.addNode(12);
    tree.addNode(4);
    tree.addNode(15);
    tree.addNode(10);

    preOrder(tree.root);
  });

  it('Post-Order Tree Traversal', () => {
    let tree = new Tree();
    tree.addNode(8);
    tree.addNode(5);
    tree.addNode(12);
    tree.addNode(4);
    tree.addNode(15);
    tree.addNode(10);

    postOrder(tree.root);
  });
});
