class AVLNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
    return 1;
  }
  insert(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insert(val)
      } else {
        this.left = new AVLTree(val);
      }
    } else {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new AVLTree(val);
      }
    }
    this.updateHeight();
    this.balance();
  }
  updateHeight() {
    const left = this.left ? this.left.updateHeight() : 0;
    const right = this.right ? this.right.updateHeight() : 0;
    this.height = Math.max(left, right) + 1;
    return this.height;
  }
  balance() {
    const leftHeight = this.left.updateHeight();
    const rightHeight = this.right.updateHeight();
    if (leftHeight - rightHeight > 1) {
      this.rotateRR();
    }
    if (rightHeight - leftHeight > 1) {
      this.rotateLL();
    }
  }
}

// TESTS
const expect = require('chai').expect;

const tree = new AVLTree(5);
tree.insert(6);
tree.insert(4);
tree.insert(3);
expect(tree.height).to.equal(3);