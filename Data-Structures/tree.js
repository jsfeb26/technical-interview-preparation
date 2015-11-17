import TreeNode from './treeNode.js';

export default class Tree {
  constructor(root = null) {
    this.root = root;
  }

  addNode(dataValue) {
    const treeNode = new TreeNode(dataValue);

    if (!this.root) {
      this.root = treeNode;
    }
    else {
      function add(currentRoot) {
        if (treeNode.data < currentRoot.data) {
          if (!currentRoot.leftChild) {
            currentRoot.setLeftChild(treeNode);
          }
          else {
            add(currentRoot.leftChild);
          }
        }
        else {
          if (!currentRoot.rightChild) {
            currentRoot.setRightChild(treeNode);
          }
          else {
            add(currentRoot.rightChild);
          }
        }
      }

      add(this.root);
    }
  }
}
