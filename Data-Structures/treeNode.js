export default class TreeNode {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }

  setLeftChild(left) {
    this.leftChild = left;
  }

  setRightChild(right) {
    this.rightChild = right;
  }

  setData(dataValue) {
    this.data = dataValue;
  }

  logData() {
    console.log(this.data);
  }
}
