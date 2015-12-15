// Reverse a general binary tree, i.e. flip it from right to left.
//
// So for example if we had the binary tree
//
//      6
//    /   \
//   3     4
//  / \   / \
// 7   3 8   1
// Reversing it would create
//
//      6
//    /   \
//   4     3
//  / \   / \
// 1   8 3   7

// Solution: http://stackoverflow.com/questions/9460255/reverse-a-binary-tree-left-to-right

// Funny/sad story: https://twitter.com/mxcl/status/608682016205344768

export default function flipTree(root) {
  if (!root) {
    return null;
  }

  var l = flipTree(root.left);
  var r = flipTree(root.right);

  root.right = l;
  root.left = r;

  return root;
}

function Node(nodeValue) {
  this.val = nodeValue;
  this.left = null;
  this.right = null;
}
