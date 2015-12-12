import {expect} from 'chai';
import Tree from '../Data-Structures/tree';
import {inOrder, preOrder, postOrder} from '../Algorithms/treeTraversal';
import isBST from '../Algorithms/iK/Homework/Trees/isBST';

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

describe('iK Tree Homework Tests', () => {
  it('Is Binary Search Tree Tests', () => {
    const validTree = {
      'val': 10,
      'left': {
        'val': 5,
        'left': {
          'val': 4,
          'left': null,
          'right': null
        },
        'right': {
          'val': 8,
          'left': null,
          'right': null
        }
      },
      'right': {
        'val': 15,
        'left': {
          'val': 9,
          'left': null,
          'right': null
        },
        'right': {
          'val': 16,
          'left': null,
          'right': {
            'val': 17,
            'left': null,
            'right': null
          }
        }
      }
    }

    const invalidTree = {
      'val': 10,
      'left': {
        'val': 5,
        'left': {
          'val': 4,
          'left': null,
          'right': null
        },
        'right': {
          'val': 8,
          'left': null,
          'right': null
        }
      },
      'right': {
        'val': 15,
        'left': {
          'val': 9,
          'left': null,
          'right': null
        },
        'right': {
          'val': 14,
          'left': null,
          'right': {
            'val': 13,
            'left': null,
            'right': null
          }
        }
      }
    }

    const result1 = isBST(validTree);
    const result2 = isBST(invalidTree);

    expect(result1).to.be.true;
    expect(result2).to.not.be.true;
  });
});
