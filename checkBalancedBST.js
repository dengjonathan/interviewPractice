const checkBalanced = tree => checkHeight(tree) > -1 ? true : false;

const checkHeight = tree => {
  if (!tree) {
    return 0;
  }
  const leftHeight = checkHeight(tree.left);
  const rightHeight = checkHeight(tree.right);
  return Math.abs(leftHeight - rightHeight) < 2 && leftHeight > -1 && rightHeight > -1
    ? Math.max(leftHeight + rightHeight) + 1
    : -1;
};

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const balancedTree = new Tree(1);
balancedTree.left = new Tree(2);
balancedTree.right = new Tree(3);

const expect = require('chai').expect;

expect(checkBalanced(balancedTree)).to.equal(true);

const unBalancedTree = new Tree(1);
unBalancedTree.left = new Tree(2);
unBalancedTree.right = new Tree(3);
unBalancedTree.right.left = new Tree(4);
unBalancedTree.right.left.left = new Tree(5);

expect(checkBalanced(unBalancedTree)).to.equal(false);
console.log('all tests passed');