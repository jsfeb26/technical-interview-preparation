// Create an iterator for a BST. The iterator should support the next() function and return
// the next node in the tree, inorder. If no such node exists, then return NULL.

// Iterator is a concept in higher level languages like C++ or Java. You probably can tell
// what it is. If you want to know more, please feel free to Google for the concept.

// Solution: http://stackoverflow.com/questions/12850889/in-order-iterator-for-binary-tree

// Time: 30 minutes.

export function Iterator(root) {
  this.nextNode = root;

  if (this.nextNode === null) {
    return;
  }

  while (this.nextNode.left !== null) {
    this.nextNode = this.nextNode.left;
  }
}

Iterator.prototype = {
  hasNext: function() { return this.nextNode !== null },
  next: function() {
    var current = this.nextNode;

    // try to explore right tree
    if (this.nextNode.right !== null) {
      this.nextNode = this.nextNode.right;

      while (this.nextNode.left !== null) {
        this.nextNode = this.nextNode.left;
      }

      return current;
    }
    else { // if no right tree then go to the parent
      while (true) {
        if (this.nextNode.parent === null) {
          this.nextNode = null;
          return current;
        }

        if (this.nextNode.parent.left === this.nextNode) {
          // means coming from left side to parent is next
          this.nextNode = this.nextNode.parent;
          return current;
        }

        // if not from left child then from right child and we need to keep
        // going up the tree until we come from a left child
        this.nextNode = this.nextNode.parent;
      }
    }
  }
}

export function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

Node.prototype = {
  addLeft: function(node) {
    this.left = node;
    node.parent = this;
  },
  addRight: function(node) {
    this.right = node;
    node.parent = this;
  }
}
