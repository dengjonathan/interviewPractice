const Tree = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.insert = function(val) {
  // go left
  if (val < this.val) {
    if (!this.left) {
      this.left = new Tree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (!this.right) {
      this.right = new Tree(val);
    } else {
      this.right.insert(val);
    }
  }
};

const BST = function() {
  this.root = null;
}

BST.prototype.insert = function(val) {
  if (!this.root) {
    const node = new Tree(val);
    this.root = node;
  } else {
    this.root.insert(val);
  }
  return this.root;
}

const minHeightInsert = (sortedArr, tree) => {
  if (!sortedArr.length) {
    return;
  }
  const mid = Math.floor(sortedArr.length / 2);
  tree.insert(sortedArr[mid]);
  minHeightInsert(sortedArr.slice(0, mid), tree);
  minHeightInsert(sortedArr.slice(mid + 1), tree);
  return tree;
}

// tests
const expect = require('chai').expect;

const bst = new BST();

minHeightInsert([1,2,3,4,5,6,7], bst);

expect(bst.root.val).to.equal(4);
expect(bst.root.left.val).to.equal(2);
expect(bst.root.left.right.val).to.equal(3);
expect(bst.root.right.val).to.equal(6);
console.log('all tests passed');