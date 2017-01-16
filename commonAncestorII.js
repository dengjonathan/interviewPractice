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


// below is optimized solution, where we only have to search the tree once
// if tree contains a but not b, return a
// if tree contains b but not a, return b
// if tree contains their common ancestor, return common ancestor
// if tree contains neither p nor q, return null

const commonAncestorOpt = (root, a, b) => {
  if (!root) {
    return null;
  }
  if (a === b) {
    return a;
  }

  const left = commonAncestorOpt(root.left, a, b);
  // if left is not null and not a or b, it is the common ancestor
  if (left && left !== a && left !== b) {
    return left;
  }

  const right = commonAncestorOpt(root.right, a, b);
  if (right && right !==a && right !== b) {
    return right;
  }

  // if one is on left and other on right, or either a or b is root
  if (left && right || root === a || root === b) {
    return root;
  } else {
    // return not null one
    return left ? left : right;
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

expect(commonAncestorOpt(tree, a, e)).to.equal(tree);