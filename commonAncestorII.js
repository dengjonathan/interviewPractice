// this is for a non-BST Tree
// find closest common ancestor of 2 nodes
// time O(n) visit each level, and each level will have to visit all nodes below that
// space O(1) no copying other nodes
// not optimizized because we search the same subtrees on each level multiple times
const commonAncestor = (root, a, b) => {
  const isDescendant = (root, target) => {
    if (!root) {
      return false;
    }
    if (root === target) {
      return true;
    }
    return isDescendant(root.left, target) || isDescendant(root.right, target);
  };

  const findAncestor = (root, a, b) => {
    const onLeftA = isDescendant(root.left, a);
    const onLeftB = isDescendant(root.left, b);

    if (onLeftA !== onLeftB) {
      return root;
    }

    return onLeftA ? findAncestor(root.left, a, b) : findAncestor(root.right, a, b);
  }

  // check if root contains both
  if (!isDescendant(root, a) || !isDescendant(root, b)) {
    return null;
  }
  return findAncestor(root, a, b);
}

const expect = require('chai').expect;

class Tree {
  constructor(val) {
    this.val = val || null;
    this.left = this.right = null;
  }
}

const tree = new Tree(4);
const a = new Tree('a');
const b = new Tree('b');
const c = new Tree('c');
const d = new Tree('d');
const e = new Tree('e');

tree.left = e;
tree.right = c;
c.left = d;
c.right = a;
d.left = b;

expect(commonAncestor(tree, a, b)).to.equal(c)