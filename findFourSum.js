const findFour = (arr, sum) => {
  const pairs = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (!pairs[sum]) {
        pairs[sum] = [];
      }
      pairs[sum].push([i, j]);
    }
  }

  for (let s in pairs) {
    const comp = sum - parseInt(s);
    if (pairs[comp]) {
      for (let i = 0; i < pairs[s].length; i++) {
        for (let j = 0; j < pairs[comp].length; j++) {
          const set = new Set([
            ...pairs[s][i],
            ...pairs[comp][j]
          ]);
          if (set.size === 4) {
            return Array.from(set);
          }
        }
      }
     }
  }
  return null;
};

const expect = require('chai').expect;

expect(findFour([1,2,3,4,4], 13)).to.eql([1,2,3,4]);
expect(findFour([2,1,1,4], 4)).to.equal(null);