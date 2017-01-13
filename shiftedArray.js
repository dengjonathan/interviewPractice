// find number in O(log n) in shifted array
const findPivot = (arr, start=0, end=arr.length-1) => {
  if (start >= end) {
    return -1;
  }
  const pivot = Math.floor(arr.length / 2);
  if (arr[start] <= arr[pivot] && arr[pivot] <= arr[end]) {
    return pivot;
  }
  if (arr[start] <= arr[pivot]) {
    return findPivot(arr, pivot, end);
  }
  return findPivot(arr, start, pivot);
};


const findNumber = (arr, target) => {
  const pivot = Math.floor(arr.length / 2);
  if (arr[pivot] === target) {return pivot;}
  if (pivot < arr[0]) {

  } else {

  }
};


// tests
const expect = require('chai').expect;

expect(findPivot([4, 4, 4, 1, 2, 3])).to.equal(3);
console.log('all tests passed');