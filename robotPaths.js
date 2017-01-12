
// backtrackingn too slow
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let counter = 0;

  const uniquePathsInner = (m, n, pos=[0,0]) => {
    console.log(pos, possMoves(m, n, pos));
    if (pos[0] === m - 1 && pos[1] === n -1) {
      return counter++;
    }
    possMoves(m, n, pos).forEach(move => {
      uniquePathsInner(m, n, move);
    });
  };

  const possMoves = (m, n, pos) => {
    const poss = [[1, 0], [0, 1]];
    return poss.map(ea => [ea[0] + pos[0], ea[1] + pos[1]])
      .filter(pos => pos[0] < m && pos[1] < n);
  }
  uniquePathsInner(m, n); 
  return counter;   
};

/// DP solution
// based on there are two ways to get to each square (from left, from top)
// just add up # of ways there are to get to left and upper square

//Time O(m * n) call recursively for each square on the board
const uniquePathsDP = (m, n) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (m === 1) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return uniquePathsDP(m - 1, n) + uniquePathsDP(m, n - 1);
}

const expect = require('chai').expect;

expect(uniquePathsDP(1,1)).to.equal(1);
expect(uniquePathsDP(2,2)).to.equal(2);
expect(uniquePathsDP(1,2)).to.equal(1);
expect(uniquePathsDP(3,3)).to.equal(6);
