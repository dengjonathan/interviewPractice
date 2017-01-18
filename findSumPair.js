// find a pair of values in a sorted array equal to a sum

const sumInArray = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return true;
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
  }
  return false;
}

const expect = require('chai').expect;

expect(sumInArray([1,2,4,4], 8)).to.equal(true);
expect(sumInArray([1,2,3,9], 8)).to.equal(false);