// Write a function to traverse a Binary tree PostOrder, without using recursion.
// As you traverse, please print contents of the nodes.
// (Bonus: Spend 1 minute more and also do it with recursion)

// Solution: https://www.youtube.com/watch?v=hv-mJUs5mvU

// (Time: 30 minutes)
export function postOrderIterative(root) {
  if (root === null) {
    return;
  }

  var outputStack = [];
  var treeStack = [];
  treeStack.push(root);

  while (treeStack.length > 0) {
    var current = treeStack[treeStack.length - 1];
    treeStack.length -= 1;

    outputStack.push(current.val);

    if (current.left !== null) {
      treeStack.push(current.left);
    }

    if (current.right !== null) {
      treeStack.push(current.right);
    }
  }

  for (var i = outputStack.length - 1; i >= 0; i -= 1) {
    console.log(outputStack[i]);
  }
}

export function postOrderRecursive(root) {
  if (root === null) {
    return;
  }

  postOrderRecursive(root.left);
  postOrderRecursive(root.right);

  console.log(root.val);
  return;
}
