// (Another popular interview problem)

// Let T be a rooted tree. The lowest common ancestor between two nodes n1 and n2 is
// defined as the lowest node in T that has both n1 and n2 as descendants.

// The LCA of n1 and n2 in T is the shared ancestor of n1 and n2 that is located farthest
// from the root. Computation of lowest common ancestors may be useful, for instance,
// as part of a procedure for determining the distance between pairs of nodes in a tree:
// the distance from n1 to n2 can be computed as the distance from the root to n1,
// plus the distance from the root to n2, minus twice the distance from the root to their
// lowest common ancestor. (Source: Wikipedia)

// Design an write an algorithm to find the LCA node, given two nodes in a Binary Tree
// * The tree may or may not be a BST
// * Assume a Node structure that has NO parent pointer
// * Assume that the two nodes are distinct and exist in the tree
// * Find a solution that has runtime complexity of O(N). N is # nodes in the tree.

// FindLCA(10,20) = 15
// FindLCA(50,80) = 65
// FindLCA(20,60) = 45

// Desired solution: O(N) time.

// Solution: http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/

// (Time: 30 minutes)

export default function LCA(root, node1, node2) {
  var path1 = [];
  var path2 = [];

  function findPath(root, node1, node2, path) {
    path.push(root.val);

    if (root.val === node1) {
      path1 = path.slice();
    }

    if (root.val === node2) {
      path2 = path.slice();
    }

    if (root.left !== null) {
      findPath(root.left, node1, node2, path);
      path.length -= 1;
    }

    if (root.right !== null) {
      findPath(root.right, node1, node2, path);
      path.length -= 1;
    }
  }

  findPath(root, node1, node2, []);

  if (path1.length > path2.length) {
    path1.length = path2.length; // trim off last elements because it can't possibly be them
  }
  else if (path1.length < path2.length) {
    path2.length = path1.length; // trim off last elements because it can't possibly be them
  }

  for (var i = path1.length - 1; i >= 0; i -= 1) { // start from end and go up
    if (path1[i] === path2[i]) {
      return path1[i];
    }
  }

  return -1;
}
