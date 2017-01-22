const powerSet = str => {
  // flawed approach use perumtations
  const combos = Array.from(new Set(str))
    .reduce((set, letter, ind, letters) => {
      for (let i = ind + 1; i <= letters.length; i++) {
        for (let j = i + 1; j <= letters.length + 1; j++)
          set.add([letter, ...letters.slice(i, j)].sort().join(''));
      }
      return set;
    }, new Set())
  return [
    '',
    ...Array.from(combos).sort()
  ];
};


// better approach use top down recursion/ DP to build set from previous
// Time space O(n * 2 ^n)  we have to double the number of operations at each step
const powerSetRecurse = (arr, n = arr.length) => {
  if (n === 0) {
    return [[]];
  }
  const previous = powerSetRecurse(arr, n - 1);
  return [
    ...previous,
    ...previous.map(set => [...set, arr[n - 1]])
  ];
}

const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const expect = chai.expect;

expect(powerSetRecurse(['a', 'b', 'c'])).to.containSubset([[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'b', 'c']])