// BRUTE FORCE SOLUTION: store each number in an array that re-sorts everytime 
// O(n log n) insertion, O(1) median lookup

// Heap solution: store values in a minHeap (root is lowest value) and maxHeap (root islargest value)
// To find median either average roots (if total is even) or take root of largest heap O(1) median lookup
// O(log n) insertion

class Heap {
    constructor() {
        this._heap = [];
    }
    getLength() {return this._heap.length;}

    getHead() {return this._heap[0];}

    _getParent(ind){return Math.floor((ind + 1) / 2) - 1;}

    _getChildren(n){
      const child2 = this._heap[(n + 1) * 2] ? (n + 1) * 2 : undefined;
      const child1 = this._heap[(n + 1) * 2 - 1] ? (n + 1) * 2 - 1 : undefined;
      return [child1, child2]; 
    }
    _switch(ind1, ind2) {
      const memo = this._heap[ind1];
      this._heap[ind1] = this._heap[ind2];
      this._heap[ind2] = memo;
      return ind2;
    }
}

class minHeap extends Heap {
  pop() {
      this._heap[0] = this._heap[this._heap.length -1];
      this._heap = this._heap.slice(0, this._heap.length - 1);
      this._rebalance();
      // return popped value
  }

  insert(val) {
      this._heap.push(val);
      let ind = this._heap.length - 1;
      let parentInd = this._getParent(ind);
      while (val < this._heap[parentInd] && ind !== 0) {
        ind = this._switch(ind, parentInd);
        parentInd = this._getParent(ind);
      }
      // FIXME: what is most useful value to return here?
      return this._heap[0];
  }

  //TODO: refactor to be more general so can use with a comparator function for both min and max heaps
  _rebalance() {
    const head = this._heap[0];
    let ind = 0;
    let children = this._getChildren(ind);
    while(children[0] && this._heap[children[0]] < head || children[1] && this._heap[children[1]] < head) {
      if (this._heap[children[0]] < head) {
        ind = this._switch(ind, children[0]);
      }
      if (this._heap[children[1]] < head) {
        ind = this._switch(ind, children[1]);
      }
      children = this._getChildren(ind);
    }
    // last check for last switch for root
    const immediates = this._getChildren(0);
    if (this._heap[immediates[0]] < this._heap[0]) {
      this._switch(0, immediates[0]);
    }
    if (this._heap[immediates[1]] < this._heap[0]) {
      this._switch(0, immediates[1]);
    }
  }
}

class maxHeap extends Heap {
    pop(){}
    insert(){}
    _rebalance(){}
}
var MedianStream = function () {
  this._maxHeap = new minHeap(); //less than median
  this._minHeap = new maxHeap(); // greater than median
};

MedianStream.prototype = {
  _rebalance() {
    if (Math.abs(this._maxHeap.length - this._minHeap.length) < 2){
        return;
    }
    const longer = this._maxHeap.length < this._minHeap ? this._minHeap : this._maxHeap;
    const shorter = longer === this._maxHeap ? this._minHeap : this._maxHeap;
    shorter.insert(longer.pop());
  },
  insert: function (num) {
    if (num > this._maxHeap.getHead()) {
        this._minHeap.insert(num);
    } else {
        this._maxHeap.insert(num);
    }
    this._rebalance();
  },
  peekMedian: function () {
    if (this._minHeap.length _ this_maxHeap.length % 2 === 0) {
       return (this._minHeap[0] + this._maxHeap[0]) / 2 
    }
    return this._minHeap.length < this._maxHeap.length ? this._maxHeap[0] : this._minHeap[0];
  },
  size: function () {
      return this._maxHeap.length + this._minHeap.length;
  }
};


// TESTS
// HEAP TESTS:
const values = [4, 7, 1, 0.5, 6];
const min = new minHeap();
values.forEach(val => min.insert(val));

if (min.getLength() !== 5) {
  throw new Error('not right length');
}

if (min._heap[0] !== 0.5) {
  throw new Error('out of order, heap looks like', min._heap);
}

min.pop();

if (min._heap[0] !== 1) {
    console.log(min._heap);
    throw new Error('out of order');
}
console.log('all tests passed');

