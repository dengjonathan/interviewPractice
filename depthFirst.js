var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function (filter, depth = 0) {
  if (!this.children) {
    return [this.value].filter(val => filter(val, depth));
  }
  return [
    ...[this.value].filter(val => filter(val, depth)),
    ...this.children
    .reduce((list, child) => {
      return list.concat(child.DFSelect(filter, depth + 1));
    }, [])
  ];
  // const getChildren = (tree) => {
  //   if (!tree.children) {
  //     return [tree.value];
  //   }
  //   console.log(tree.children.reduce((list, child) => {
  //     return list.concat(getChildren(child));
  //   }, []))
  //   return [
  //     tree.value,
  //     ...tree.children.reduce((list, child) => {
  //       return list.concat(getChildren(child));
  //     }, [])
  //   ];
  // }
  // return getChildren(this).filter((value, index) => filter(value, ));
};

Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

var depthFilter = function (filterDepth) {
  return function (node, nodeDepth) {
    return filterDepth == nodeDepth;
  };
};
// keep a list of nodes by depth to compare
var nodeDepths = [],
  deepNodes = [];
var root = new Tree(0);
// depth: 0
nodeDepths.push([0]);
// depth: 1
root.addChild(1);
root.addChild(2);
nodeDepths.push([1, 2]);
// depth: 2
root.children[0].addChild(3);
root.children[0].addChild(4);
root.children[1].addChild(5);
root.children[1].addChild(6);
nodeDepths.push([3, 4, 5, 6]);
// depth: 3 (sparse)
root.children[0].children[0].addChild(7);
root.children[0].children[0].addChild(8);
root.children[1].children[0].addChild(9);
root.children[1].children[0].addChild(10);
nodeDepths.push([7, 8, 9, 10]);

let result = root.DFSelect(depthFilter(1));
console.log(result);

// // Using an inner recursive function
// Tree.prototype.DFSelect = function (filter) {
//   var results = [];

//   (function subroutine(node, depth) {
//     if (filter(node.value, depth)) {
//       results.push(node.value);
//     }

//     for (var i = 0; i < node.children.length; i++) {
//       var child = node.children[i];
//       subroutine(child, depth + 1);
//     }
//   })(this, 0);

//   return results;
// };

// // Using "pure recursion"
// Tree.prototype.DFSelect = function (filter, depth) {
//   depth = depth || 0;

//   var rootSelection = filter(this.value, depth) ? [this.value] : [];

//   var childSelections = this.children.map(function (child) {
//     return child.DFSelect(filter, depth + 1);
//   });

//   // This line can be greatly simplified with the ES6 spread operator:
//   // return rootSelection.concat(...childSelections);
//   return [].concat.apply(rootSelection, childSelections);
// };