var findMin = function (nums) {
  return nums.sort((a, b) => a - b)[0];
};

const res = findMin([3, 4, 5, 1, 2]);
console.log(res);
