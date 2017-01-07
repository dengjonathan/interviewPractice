// inorder
const inorderDFS = (root, cb) => {
  if (!root) {
    return;
  }
  inorderDFS(root.left, cb);
  cb(root)
  inorderDFS(root.right, cb);
};

// in order iterative - keep going left and pushing nodes into the stack
// you reach the end, pop an item from the stack and visit/ cb/add to array
// set current to its right child
const inorderDFSIter = (root, cb) => {
  const stack = [];
  current = root;
  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      const node = stack.pop();
      cb(node);
      current = node.right;
    }
  }
};

// preorder this is easier because you don't have to visit parent nodes twice
const preorderDFS = (root, cb) => {
  if (!root) {
    return;
  }
  cb(root)
  preorderDFS(root.left, cb);
  preorderDFS(root.right, cb);
};

const preorderDFSIter = (root, cb) => {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    cb(node);
    if (node.left) {
      stack.push(node.right);
    }
    if (node.right) {
      stack.push(node.left);
    }
  }
};

// postorder
const postorderDFS = (root, cb) => {
  if (!root) {
    return;
  }
  postorderDFS(root.left, cb);
  postorderDFS(root.right, cb);
  cb(root)
};

const postorderIter = (root, cb) => {
  const stack = [];
  const result = [];
  let current = root;
  while (stack.length || current) {
    if (current) {
      result.unshift(current.val);
      if (current.left) {
        stack.push(current.left);
      }
      current = current.right;
    } else {
      stack.pop;
    }
  }
};