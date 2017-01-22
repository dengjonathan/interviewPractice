var pathSum = function(root, sum) {
    const preOrderSearch = (tree, target=sum) => {
        if (!tree) {
            return 0;
        }
        const oneSolution = root.val === target ? 1 : 0;
        return oneSolution + preOrderSearch(root.left, sum-root.val) + preOrderSearch(root.right, sum-root.val);
    };
    return preOrderSearch(root);
};j