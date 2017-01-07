/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// inorder traverse, then make sure all nodes are ordered
var isValidBST = function(root, cb) {
    const inorderDFS = (root, cb) => {
        if (!root) {
            return;
        }
        inorderDFS(root.left, cb);
        cb(root)
        inorderDFS(root.right, cb);
    };
    const result = [];
    inorderDFS(root, node => {result.push(node.val)});
    console.log(result);
    return result.every((val, ind, collection) => ind + 1 < collection.length 
        ? val < collection[ind + 1]
        : true
    );
};

// iterative BST traversal