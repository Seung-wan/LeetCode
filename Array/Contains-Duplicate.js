var containsDuplicate = function (nums) {
  if (nums.length === [...new Set(nums)].length) return false;
  return true;
};
