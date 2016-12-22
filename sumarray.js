Array.prototype.sum = function () {
  return this.reduce((total, curr) => total + curr)
};

function sumArray(array) {
  if (!array.length) return 0;
  let max = array[0];
  let possibleLengths = [...array.keys()];

  return Math.max(
    ...possibleLengths.map(each => {
      return array.reduce((memo, _, index) => {
        let sum = array.slice(index, index + each + 1).sum();
        if (sum > memo) {
          memo = sum;
        }
        return memo;
      }, max);
    })
  );
}




var a = sumArray([1, 2, 3, -5, 4, 5, 6])

console.log(a);


const sumArray = array => array.reduce(
  ({ max, tally }, next) => ({
    max: Math.max(tally + next, max),
    tally: Math.max(tally + next, 0)
  }), { max: -Infinity, tally: 0 }
).max;
