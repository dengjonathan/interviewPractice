const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ];
};

const expect = require('chai').expect;

const arr = [2,3,4,7,22,3,1];
quickSort(arr);
expect(quickSort(arr)).to.eql([1,2,3,3,4,7,22]);