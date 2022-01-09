var productExceptSelf = function (nums) {
  let tempArray = [];
  for (let i = 0; i < nums.length; i++) {
    let mulNum = 1;
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[j]);
      if (i !== j) mulNum *= nums[j];
    }
    tempArray = [...tempArray, mulNum];
  }

  return tempArray;
};
const result = productExceptSelf([1, 2, 3, 4]);
console.log(result);
