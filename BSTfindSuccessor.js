// the immediate success of a node is either
// 1. the lowest node on its right branch
// 2. if it doesn't have a right branch the first node on its ancestor chain with a left branch

const findSuccessor = node => {
  if (node.right) {
    return findLowest(node.right);
  }
  let child = node;
  let parent = node.parent;
  // keep traversing up tree until no more parents or child is left branch of parent
  while (parent && parent.right === child) {
    child = parent;
    parent = child.parent;
  }
  return parent;
};

const findLowest = node => {
  while(node.left) {
    node = node.left;
  }
  return node;
};

// tests
const expect = require('chai').expect;

console.log('all tests passed');