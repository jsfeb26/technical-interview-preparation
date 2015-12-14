// (Google question)

// Write a recursive function treeToList(Node root) that takes a BST and rearranges the
// internal pointers to make a circular doubly linked list out of the tree nodes.
// The "previous" pointers should be stored in the "Left" field and the "next" pointers
// should be stored in the "Right" field. The list should be arranged so that the nodes
// are in increasing order. Return the head pointer to the new list.
// The operation can be done in O(n) time.

// Suggested time: 45 minutes.

// Solution: http://articles.leetcode.com/2010/11/convert-binary-search-tree-bst-to.html

export default function convertToDLL(root) {
  var head = null;

  function dL(root) {
    if (root) {
      if (root.left) {
        dL(root.left);

        // find greatest node in left subtree and set it equal to left (previous)
        while (root.left.right) {
          root.left = root.left.right;
        }

        root.left.right = root;
      }

      if (!head) {
        head = root;
      }
      head.left = root;

      if (root.right) {
        dL(root.right);

        // find smallest node in right subtree and set it equal to right (next)
        while (root.right.left) {
          root.right = root.right.left
        }

        root.right.left = root;
      }
    }
  }

  dL(root);
  head.left.right = head;
  return head;
}
