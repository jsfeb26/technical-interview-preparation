// Write a function that will return the number of binary trees that can be constructed, with 'n' nodes.

// e.g.
// for, n=1 ==> 1 possible tree (just root)
// for, n=2 ==> 2 possible trees (1. root->right   2. root->left)
// for, n=3 ==> 5 possible trees (1. root->right->right  2. root->right->left  3. root->left->left  4. root->left->right 5. root->left,right)

// If you keep doing this, it will form a series called Catalan numbers.
// One can simply lookup the formula for Catalan numbers and write code for it.
// But that's not how we want to do this. We want to do this by understanding the underlying recursion.
// The recursion is based on tree-topology only, as you can see by examples above. Contents of the nodes of the tree do not matter.

// Solution:
// http://techieme.in/count-binary-search-trees/ OR
// http://cslibrary.stanford.edu/110/BinaryTrees.html (Search for "Counttrees")

// (Suggested time: 20 minutes)

// given a number of nodes return the total number possible combinations
// of binary trees
// T(n) = 0(2^n)
// S(n) = 0(n)
export default function countTrees(iNodeCount) {
  if (iNodeCount <= 1) {
    // the end of a tree add 1 to the count
    return 1;
  }

  var total = 0;
  var left, right;

  for (var i = 1; i <= iNodeCount; i += 1) {
    left = countTrees(i - 1);
    right = countTrees(iNodeCount - i);

    total += (left * right);
  }

  return total;
}
