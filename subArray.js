// find every possible subarray in array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time complexity is O(n!) where n is length of array 
// for problems where you have a recursive call nested in a for loop, where the search area is reduced by 1 each time
var subsets = function(nums) {
  const results = [];
  const dfs = (ind, path) => {
      results.push(path);
      // for each possible value create a new path, only with values to the right (to not double count)
      for (let j = ind; j < nums.length; j++) {
          dfs(j + 1, path.concat([nums[j]]));
      }
  };
  dfs(0, []);
  return results;
};

// iterative
const subsets = nums => {
  const results = [[]];
  for (let i = 0; i < nums.length; i++) {
    results.push(...results.map(path => [...path, nums[i]]))
  }
  return results;
};