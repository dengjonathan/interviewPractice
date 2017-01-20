// assumption is that they're sorted arrays based on weights
const knapSack = (weights, values, W, n=weights.length) => {
  if (n === 0 || W === 0) {
    return 0;
  }
  // if last item is too heavy, don't consider it
  if (weights[n - 1] > W) {
    return knapSack(weights, values, W, n - 1);
  }
  // return max of 1. optimal solution including last item, optimal solution w/o last item
  return Math.max(
    values[n - 1] + knapSack(weights, values, W - weights[n - 1], n - 1),
    knapSack(weights, values, W, n - 1)
  );
};

const expect = require('chai').expect;

expect(knapSack([1,2,3], [3,2,1], 3)).to.equal(5);

expect(knapSack([5,5,5], [1,2,3], 0.5)).to.equal(0);