/**
 * @param {string} s
 * @return {boolean}
 */

// Why is this slow?
// seems like it may create extra scopes everytime (is the data copying the slow part?)
var canWin = function (s) {
  const canWinInner = (s) => {
    if (hash[s]) {
      return hash[s]
    };
    const letters = [...s];
    const results = [];
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] + letters[i + 1] === '++') {
        results.push([
          ...letters.slice(0, i),
          '--',
          ...letters.slice(i + 2)
        ].join(''));
      }
    }
    if (!results.length) {
      return false;
    }
    const result = results.some(poss => !canWin(poss));
    hash[s] = result;
    return result;
  };
  const hash = {};
  return canWinInner(s);
};
// TEST

const a = canWin("+++++++++++++++++++++");
console.log(a);
require('chai').expect(canWin('++++')).to.equal(true);
console.log('all tests passed');
