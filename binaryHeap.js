function BinaryHeap(comparator) {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = comparator || function (i, j) {
    if (i < j) {
      return -1;
    }
    if (i === j) {
      return 0;
    }
    return 1;
  };

  this.getParent = index => index > 0 ? Math.floor((index - 1) / 2) : null;

  this.getChildren = function (index) {
    const children = [];
    if (index * 2 + 1 < this._heap.length) {
      children.push(index * 2 + 1);
    }
    if (index * 2 + 2 < this._heap.length) {
      children.push(index * 2 + 2);
    }
    return children;
  };

  this._switch = function (childIndex, parentIndex) {
    const child = this._heap[childIndex];
    this._heap[childIndex] = this._heap[parentIndex];
    this._heap[parentIndex] = child;
    return parentIndex;
  }
}

BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);
  this.bubbleUp(this._heap.length - 1);
}

BinaryHeap.prototype.bubbleUp = function(index) {
  const parent = this.getParent(index);
  if (parent === null) {
    return;
  }
  if (this._compare(this._heap[index], this._heap[parent]) < 0) {
    this._switch(index, parent);
    this.bubbleUp(parent);
  }
};

BinaryHeap.prototype.removeRoot = function () {
  const root = this._heap.shift();
  this._heap.unshift(this._heap.pop());
  this.bubbleDown(0);
  return root;
};

BinaryHeap.prototype.bubbleDown = function (index) {
  const children = this.getChildren(index);
  if (!children.length) {
    return;
  }
  for (let i = 0; i < children.length; i++) {
    if (this._compare(this._heap[index], this._heap[children[i]]) > 0) {
      const child = this._switch(index, children[i]);
      this.bubbleDown(child);
      this.bubbleDown(index);
    }
  }
};

const expect = require('chai').expect;
var minHeap = new BinaryHeap();
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(9);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(0);

var compare = minHeap._compare;
var heap = minHeap._heap;

expect(heap[0]).to.equal(0);

minHeap.removeRoot();

expect(heap[0]).to.equal(1);


// test maxHeap
const maxHeap = new BinaryHeap((a, b) => {
  if(a < b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  return -1;
});
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(9);
maxHeap.insert(8);
maxHeap.insert(1);
maxHeap.insert(0);

expect(maxHeap.getRoot()).to.equal(9);

expect(maxHeap.removeRoot()).to.equal(9);

expect(maxHeap.getRoot()).to.equal(8);

console.log('all tests passed');

module.exports = BinaryHeap;