/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Bottom Up Iterative Dynamic Programming solution
// calculate optimal solution for every state, 1 to amount.
// Time: O(c * a) where c=types of coins and a= amount.  have to calculate optimal solution for each amount and each amount have to check each coin
// Space: O(a) have to memoize an optimal solution for each amount 
var coinChange = function(coins, amount) {
    const min = Array.from(Array(amount + 1)).map(_ => Infinity);
    min[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (min[i - coins[j]] + 1 < min[i]) {
                min[i] = min[i - coins[j]] + 1;
            }
        }
    }
    return min[amount] === Infinity ? -1 : min[amount];
};


// Top Down Recursive solution
// calulate final solution by recursively calculating small subsets of the problem.
// Time: O(c * a) where c=types of coins and a= amount.  have to calculate optimal solution for each amount and each amount have to check each coin
// Space: O(a) have to memoize an optimal solution for each amount 
var coinChange = function(coins, amount) {
  const memo = [0];
  const findOptimal = amount => {
    if (typeof memo[amount] === 'number') {
      return memo[amount];
    }
    let min = Infinity;
    for (let i = 0; i < coins.length; i ++) {
      if (coins[i] > amount) {
        continue;
      }
      const moves = findOptimal(amount - coins[i]) + 1;
      if (moves < min) {
        min = moves;
      }
    }
    memo[amount] = min;
    return min;
  };
  const result = findOptimal(amount);
  return result === Infinity ? -1 : result;
};

console.log(coinChange([1,2,3], 5));
