Array.prototype.sum = function() {
  return this.length ? this.reduce((memo, ea) => memo + ea) : 0;
}

var maxSubArray = function (nums) {
  const findSum = end => {
    if (end === 0) {
      return {
        val: nums[0],
        last: 0
      };
    }
    const previous = findSum(end - 1);
    const choices = [previous.val, nums[end], previous.val + nums.slice(previous.last + 1, end).sum() + nums[end]];
    const max = Math.max(...choices);
    const result = {
      val: max,
      last: end
    }
    if (max === choices[0]) {
      result.last = previous.last;
    }
    return result;
  }
  return findSum(nums.length - 1).val;
};

console.log(maxSubArray([-32,-54,-36,62,20, 76,-1,-86,-13,38,-58,-77,17,38,-17,43]));