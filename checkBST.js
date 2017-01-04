// check if binary tree is bst

const checkBST = (node, min=-Infinity, max=Infinity) => {
  if (!node) {
    return true;
  }
  if (node < min || node > max) {
    return false;
  }
  return checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max);
}