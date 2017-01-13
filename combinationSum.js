// find all combinations of numbers that equal to target sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  const ans = [];
  getSolution = (target, options=candidates.sort((a,b) => {
    if (a < b) {
      return -1;
    }
    return 1;
  }), memo=[]) => {
    console.log('target', target, options, memo)
    if (target === 0) {
      ans.push(memo);
    } 
    else if (target > 0) {
      const validOptions = options.filter(candidate => candidate <= target);
      validOptions.forEach((candidate, ind) => getSolution(target - candidate, validOptions.slice(ind), [...memo, candidate]));
    }
  } 
  getSolution(target);
  return ans;
};

//tests

const combos = combinationSum([5,10,8,4,3,12,9], 27);
console.log(combos);



 