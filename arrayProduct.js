// map an array to the product of every other item in the array except itself
// O(n) time/ space
//[1,2,3,4]
//[24 12 8 6];
// product 24
const multiMap = arr => {
  const result = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    const prev = i > 0 ? arr[i - 1] : 1;
    result[i] = product * prev;
    product = result[i];
  }
  product = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * product;
    product *= arr[i];
  }

  return result;
}

const expect = require('chai').expect;

expect(multiMap([1, 2, 3, 4])).to.eql([24, 12, 8, 6]);
expect(multiMap([0, 2, 34, 3])).to.eql([204, 0, 0, 0]);