// (Facebook question)

// Given a binary tree, print out all of its root-to-leaf paths one per line.

// e.g. for a tree that's
//      1
//   2     3
// 4 5  6 7

// Print:
// 1 2 4
// 1 2 5
// 1 3 6
// 1 3 7

// (This is a simple problem, but really tests your understanding of recursion)

// Solution: http://www.geeksforgeeks.org/given-a-binary-tree-print-out-all-of-its-root-to-leaf-paths-one-per-line/

// (Time: 20 minutes)

export default function treePaths(tree) {
  let result = [];
  result.push(tree.val);

  paths(tree, result);
}

function paths(root, result) {
  if (root.left === null && root.right === null) {
    console.log(result.join(' '));
    return;
  }

  if (root.left !== null) {
    result.push(root.left.val);
    paths(root.left, result);
    result.length -= 1;
  }

  if (root.right !== null) {
    result.push(root.right.val);
    paths(root.right, result);
    result.length -= 1;
  }
}
