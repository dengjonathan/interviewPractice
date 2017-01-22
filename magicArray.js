// in a sorted array of integers find a number where A[i] = i

// assumption all items distinct
const magicItem = (arr, start=0, end=arr.length) => {
  if (start === end) {
    return -1;
  }

  const mid = Math.floor((end - start) / 2) + start;

  if (arr[mid] === mid) {
    return mid;
  }

  if (arr[mid] < mid) {
    return magicItem(arr, mid + 1, end);
  }

  return magicItem(arr, start, mid);
}

const expect = require('chai').expect;

expect(magicItem([-2, 0, 2, 4])).to.equal(2);
expect(magicItem([-1, 0, 1, 2])).to.equal(-1);