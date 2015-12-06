// given a number of nodes return the total number possible combinations
// of binary trees
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
