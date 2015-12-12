// This is a very well known interview problem:  Given a Binary Tree, check if it is a Binary Search
// Tree (BST). A valid BST doesn't have to be complete or balanced. 
// Duplicate elements are not allowed in a BST.

// Solution: O(N) time: http://articles.leetcode.com/2010/09/determine-if-binary-tree-is-binary.html

// (Suggested Time: 30 minutes)

export default function isBST(node) {
  if (node === null) {
    return true;
  }

  if ((node.left !== null && node.left.val > node.val) ||
      (node.right !== null && node.right.val < node.val)) {
    return false;
  }

  return isBST(node.left) && isBST(node.right);
}
