// find a pair of values in a sorted array equal to a sum
// if sorted:
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

// if unsorted?
// use hashing in a single pass
// O(n) Timke and space
const sumInArrayUnsorted = (arr, target) => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(target - arr[i])) {
      return true;
    }
    set.add(arr[i]);
  }
  return false;
};

expect(sumInArrayUnsorted([1,2,4,5], 9)).to.equal(true);
expect(sumInArrayUnsorted([1,2,3,9], 8)).to.equal(false);