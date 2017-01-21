// find a possible path from top left to bottom right with obstacles
// fastest path would use dijkstras
// r: number, c: number, offLimits number, number[][] => number, number[][]
const findPath = (r, c, offLimits) => {
  if (checkOffLimits(r - 1, c - 1, offLimits)) {
    return [];
  }
  if (r === 1 && c === 1) {
    return [[0, 0]];
  }
  if (r > 1) {
    const fromTop = findPath(r - 1, c, offLimits);
    if (fromTop.length) {
      return [...fromTop, [r - 1, c - 1]];
    }
  }
  if (c > 1) {
    const fromLeft = findPath(r, c - 1, offLimits);
    if (fromLeft.length) {
      return [...fromLeft, [r - 1, c - 1]];
    }
  }
  return [];
};

const checkOffLimits = (r, c, offLimits) => {
  for (let i = 0; i < offLimits.length; i++) {
    if (offLimits[i][0] === r && offLimits[i][1] === c) {
      return true;
    }
  }
  return false;
}

const expect = require('chai').expect;

const offLimits = [[1,1]];
expect(findPath(3,3, offLimits)).to.eql([[0,0], [0, 1], [0, 2], [1,2], [2, 2]]);

// add obstacle to normal path
const offLimits2 = [[0, 1], [1,1]];
console.log(findPath(3,3, offLimits2));

// make impossible
const offLimits3 = [[1,0],[1,1],[1,2]];
expect(findPath(3,3, offLimits3)).to.eql([]);