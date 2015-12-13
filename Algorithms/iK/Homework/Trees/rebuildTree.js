// Given the in-order and pre-order traversing results of a BST (as arrays),
// write a function to rebuild the tree. The function should return the pointer
// to the root node of the tree. Then take that pointer, and print your tree level by level.

// Solutions:
// http://articles.leetcode.com/2011/04/construct-binary-tree-from-inorder-and-preorder-postorder-traversal.html
// http://edwardliwashu.blogspot.com/2013/01/construct-binary-tree-from-preorder-and.html
// https://www.youtube.com/watch?v=PAYG5WEC1Gs

// Time: 30 minutes.

export default function constrctTree(iInOrderArray, iPreOrderArray) {
  var root = rebuild(iInOrderArray, iPreOrderArray, 0, 0, iPreOrderArray.length - 1);

  BFS(root);
}

function rebuild(iInOrderArray, iPreOrderArray, rootIndex, min, max) {
  if (rootIndex >= iPreOrderArray.length) {
    return;
  }

  var root = {
    'val': iPreOrderArray[rootIndex],
    'left': null,
    'right': null
  }

  var mid = iInOrderArray.indexOf(iPreOrderArray[rootIndex]);

  if (mid > min) {
    root.left = rebuild(iInOrderArray, iPreOrderArray, rootIndex + 1, min, mid - 1);
    rootIndex += (mid - min); // the number of roots assigned during recursion
  }

  if (mid < max) {
    root.right = rebuild(iInOrderArray, iPreOrderArray, rootIndex + 1, mid + 1, max);
    rootIndex += (max - mid); // the number of roots assigned during recursion
  }

  return root;
}

function BFS(root) {
  var queue = [];
  queue.push(root);
  queue.push('end');

  var print = [];
  var level = 1;
  var levelNodeCount = 0;

  while (queue.length > 0) {
    var current = queue.shift();

    if (current === 'end') {
      console.log(print.join(' '));
      print.length = 0;
    }
    else {
      print.push(current.val);

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }

      levelNodeCount += 2;

      if (levelNodeCount === Math.pow(2, level)) {
        levelNodeCount = 0;
        level += 1;
        queue.push('end');
      }
    }
  }
}
