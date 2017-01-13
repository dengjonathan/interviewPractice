// find kth smallest value in binary tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let counter = 1;
    const stack = [];
    let current = root;
    while (root || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        const node = stack.pop();
        if (counter === k) {
            return node.val;
        }
        counter++;
        current = node.right;
    }
};