 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root.left && !root.right) {
        return [[root.val]];
    }
    return [[root.val]].concat(merge(levelOrder(root.left), levelOrder(root.right)));
};

var merge = function(left, right) {
    if (!left) {
        return right;   
    }
    if (!right) {
        return left;
    }
    const merged = left.map(function(level, index) {
        return right[index] ? level.concat(right[index]) : level;
    });
    return (left.length >= right.length) 
        ? merged
        : merged.concat(right.slice(left.length));
}

const a = levelOrder([3,9,20,null,null,15,7]);
console.log(a);