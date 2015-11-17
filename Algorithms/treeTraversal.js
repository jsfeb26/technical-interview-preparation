export function inOrder(root) {
  if (root) {
    inOrder(root.leftChild);
    console.log(root.data);
    inOrder(root.rightChild);
  }
}

export function preOrder(root) {
  if (root) {
    console.log(root.data);
    preOrder(root.leftChild);
    preOrder(root.rightChild);
  }
}

export function postOrder(root) {
  if (root) {
    postOrder(root.leftChild);
    postOrder(root.rightChild);
    console.log(root.data);
  }
}
