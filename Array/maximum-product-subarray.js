// Time Limit Exceeded

/**
 * @param {number[]} nums
 * @return {number} num
 */
var maxProduct = function (nums) {
  let result = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      result = Math.max(result, sum);
      sum *= nums[j];
    }
    result = Math.max(result, sum);
  }
  return result;
};
