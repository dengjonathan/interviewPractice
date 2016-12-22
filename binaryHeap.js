function BinaryHeap() {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) {
    return i < j
  };

  this._getParent = index => index > 0 ? Math.floor((index - 1) / 2) : null;

  this._getChildren = function (index) {
    const children = [];
    if ((index * 2 + 1) < this._heap.length) {
      children.push(this._heap[index * 2 + 1]);
    }
    if (index * 2 + 2 < this._heap.length) {
      children.push(this._heap[index * 2 + 2]);
    }
    return children;
  };

  this._switch = function (childIndex, parentIndex) {
    const child = this._heap[childIndex];
    const parent = this._heap[parentIndex];
    this._heap[childIndex] = parent;
    this._heap[parentIndex] = child;
    return parentIndex;
  }
}
// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);
  let index = this._heap.length - 1;
  while (index > 0) {
    let lessThanParent = this._compare(value, this._heap[this._getParent(index)]);
    if (lessThanParent) {
      index = this._switch(index, this._getParent(index));
    } else {
      break;
    }
  }
  return index;
}

BinaryHeap.prototype.removeRoot = function () {
  const root = this._heap[0]
  this._heap = [
    this._heap.pop(),
    ...this._heap.slice(1)
  ];
  let index = 0;
  const value = this._heap[0];
  while (this._getChildren(index).length) {
    let lessThanBothChildren = true;
    //compare to both children
    let children = this._getChildren(index);
    for (let i = 0; i < children.length; i++) {
      if (this._compare(this._heap[children[i]], value)) {
        index = this._switch(index, i);
        lessThanBothChildren = false;
      }
    }
    if (lessThanBothChildren === true) {
      break;
    }
  }
  return root;
}

var binaryHeap = new BinaryHeap();
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(9);
binaryHeap.insert(8);
binaryHeap.insert(1);
binaryHeap.insert(0);
binaryHeap.removeRoot();

var compare = binaryHeap._compare;
var heap = binaryHeap._heap;

// heap[0] is the parent of heap[1] and heap[2]
// heap[1] is the parent of heap[3] and heap[4]
console.log(heap)