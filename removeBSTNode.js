/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key, rootParent=null, rootDir=null) {
    // find node to remove
    const [node, parent, parentDir] = BSTParentSearch(root, key, rootParent, rootDir);
    if (!node) {
        return root;
    }
    if (!node.left && !node.right) {
        if (!parent) {
            root = null;
        } else {
            parent[parentDir] = null;  
        }
    } else if (!node.left || !node.right) {
        const replacement = node.left ? node.left : node.right;
        if (parent) {
            parent[parentDir] = replacement;
        } else {
            root = replacement;
        }
    } else {
        const lowestVal = findLowest(node.right).val;
        node.val = lowestVal;
        console.log(lowestVal, node.right)
        deleteNode(node.right, lowestVal, node, 'right');
    }
    
    return root;
};

const BSTParentSearch = (root, val, parent, parentDir) => {
    if (!root) {
        return [null, null];
    }
    if (root.val === val) {
        return [root, parent, parentDir];
    }
    if (root.val < val) {
        return BSTParentSearch(root.right, val, root, 'right');
    }
    return BSTParentSearch(root.left, val, root, 'left');
}

const findLowest = root => {
    let current = root;
    while (current.left) {
        current = current.left;
    }
    return current;
}; 