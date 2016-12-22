var Tree = function () {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function (child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function (a, b) {
  if (this === a && this === b) {
    return this;
  }
  if (!(this.isDescendant(a) && this.isDescendant(b))) {
    return null;
  }
  const lowerAncestor = this.children
    .map(child => child.getClosestCommonAncestor(a, b))
    .filter(child => !!child);
  return lowerAncestor[0] || this;
}

Tree.prototype.getAncestorPath = function (target) {
  if (this === target) {
    return [this];
  }
  if (!this.isDescendant(target)) {
    return null;
  }
  const thePath = this.children
    .map(child => child.getAncestorPath(target))
    .filter(path => path && !!path.length)[0];
  return [this].concat(thePath);
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

var root = new Tree();

var left = new Tree();
root.addChild(left);

var right1 = new Tree();
root.addChild(right1);

var right2 = new Tree();
right1.addChild(right2);

var right3 = new Tree();
right1.addChild(right3);

var closestAncestor = root.getClosestCommonAncestor(right2, right3);

console.log(closestAncestor === right1);

console.log(right1.getClosestCommonAncestor(right2, right3) === right2);