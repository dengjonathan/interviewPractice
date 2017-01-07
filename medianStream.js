const BinaryHeap = require('./binaryHeap');
const expect = require('chai').expect;

/**
 * @constructor
 */
var MedianFinder = function () {
  this.leftLength = 0;
  this.rightLength = 0;
  this.left = new BinaryHeap((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    return -1;
  });
  this.right = new BinaryHeap();
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.leftLength === this.rightLength) {
    this.left.insert(num);
    const leftMax = this.left.removeRoot();
    this.right.insert(leftMax);
    this.rightLength++;
  } else {
    this.right.insert(num);
    const rightMin = this.right.removeRoot();
    this.left.insert(rightMin);
    this.leftLength++;
  }
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function () {
  if (this.leftLength === this.rightLength) {
    return (this.left.getRoot() + this.right.getRoot()) / 2
  }
  return this.leftLength < this.rightLength 
    ? this.right.getRoot()
    : this.left.getRoot() 
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

const median = new MedianFinder();

median.addNum(1);
expect(median.findMedian()).to.equal(1);


median.addNum(5);
expect(median.findMedian()).to.equal((1 + 5)/2);


median.addNum(7);
expect(median.findMedian()).to.equal(5);

median.addNum(0);
expect(median.findMedian()).to.equal((1 + 5)/2);


median.addNum(6);
expect(median.findMedian()).to.equal(5);

console.log('all tests pass');