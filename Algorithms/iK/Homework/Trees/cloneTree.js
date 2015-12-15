// Given a binary tree (represented by its root node, like usual), clone it.
// Return the root node of the cloned tree.

// Solution: http://crackprogramming.blogspot.com/2012/11/make-copy-of-binary-tree-given-pointer.html

// Remember: Cloning or copying a tree is best done recursively. Notice how clean and succinct 
// the code is. Some of you may be tempted to do it breadth-first. But that's more complicated to
// handle in implementation.
export default function cloneTree(root) {

  if (!root) {
    return null;
  }

  var node = new Node(root.val);
  node.left = cloneTree(root.left);
  node.right = cloneTree(root.right);

  return node;
}

function Node(nodeValue) {
  this.val = nodeValue;
  this.left = null;
  this.right = null;
}

function inOrder(root) {
  if (root) {
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  }
}
