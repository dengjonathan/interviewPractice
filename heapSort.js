// build a min heap with all the values in an Array,
// then pop off each value one by one and add to Array
// can be done in place
// Time: O(n log n) for each of n values, add or pop from binary tree O(log n)
// also problem is that heap sort is not stable, if you put in already sorted array,
// may get array back in a different order
const Heap = require('./binaryHeap');

const heapSort = arr => {
  const result = [];
  const heap = new Heap();
  arr.forEach(num => heap.insert(num));
  let values
  while(result.length < arr.length) {
    result.push(heap.removeRoot());
  }
  return result;
};

const expect = require('chai').expect;

expect(heapSort([2,7,8,5,4,6,3,1])).to.eql([1,2,3,4,5,6,7,8]);
console.log('heapsort passed');