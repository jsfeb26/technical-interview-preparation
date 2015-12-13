import {expect} from 'chai';
import Tree from '../Data-Structures/tree';
import {inOrder, preOrder, postOrder} from '../Algorithms/treeTraversal';
import isBST from '../Algorithms/iK/Homework/Trees/isBST';
import {postOrderIterative, postOrderRecursive} from '../Algorithms/iK/Homework/Trees/postOrder';
import treePaths from '../Algorithms/iK/Homework/Trees/treePaths';
import rebuildTree from '../Algorithms/iK/Homework/Trees/rebuildTree';
import LCA from '../Algorithms/iK/Homework/Trees/LCA';

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

  it('Post Order Traversal', () => {
    const tree = {
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

    console.log('Iterative: ');
    postOrderIterative(tree);
    console.log('Recursive: ');
    postOrderRecursive(tree);
  });

  it('Tree to leaf paths', () => {
    const tree = {
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

    treePaths(tree);
  });

  it('Tree to leaf paths', () => {
    const inOrder = [4, 5, 8, 10, 9, 15, 16, 17];
    const preOrder = [10, 5, 4, 8, 15, 9, 16, 17];

    rebuildTree(inOrder, preOrder);
  });

  it('Least Common Ancestor', () => {
    var tree = {
      'val': 45,
      'left': {
        'val': 25,
        'left': {
          'val': 15,
          'left': {
            'val': 10,
            'left': null,
            'right': null
          },
          'right': {
            'val': 20,
            'left': null,
            'right': null
          }
        },
        'right': {
          'val': 30,
          'left': null,
          'right': null
        }
      },
      'right': {
        'val': 65,
        'left': {
          'val': 55,
          'left': {
            'val': 50,
            'left': null,
            'right': null
          },
          'right': {
            'val': 60,
            'left': null,
            'right': null
          }
        },
        'right': {
          'val': 75,
          'left': null,
          'right': {
            'val': 80,
            'left': null,
            'right': {
              'val': 85,
              'left': null,
              'right': null
            }
          }
        }
      }
    }

    let result1 = LCA(tree, 10, 20);
    let result2 = LCA(tree, 50, 80);
    let result3 = LCA(tree, 20, 60);
    let result4 = LCA(tree, 60, 85);

    expect(result1).to.be.equal(15);
    expect(result2).to.be.equal(65);
    expect(result3).to.be.equal(45);
  });
});
