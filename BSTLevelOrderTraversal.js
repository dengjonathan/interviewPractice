/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 //DFS
var levelOrderBottom = function(root) {
    const result= [];
    const visit = (node, height=0) => {
        if (!node) {
            return;
        }
        visit(node.left, height + 1);
        visit(node.right, height + 1);
        if (! result[height]) {
            result[height] = [];
        }
        result[height].push(node.val)
    }
    visit(root)
    return result.reverse();
};

// BFS
const levelOrderBottom = root => {
  if (!root) {
      return [];
  }
  const queue = [root];
  const result = [];
  while (queue.length) {
    const level = queue.slice();
    result.push(level.map(node => node.val));
    queue.length = 0;
    level.forEach(node => {
      if (node.left) {queue.push(node.left);}
      if (node.right) {queue.push(node.right);}
    });
  }
  return result.reverse();
};