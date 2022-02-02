var searchInsert = function (nums, target) {
  let i = 0;
  while (nums[i] !== target) {
    if (!nums.includes(target)) {
      return [...nums, target].sort((a, b) => a - b).indexOf(target);
    }
    i++;
  }
  return i;
};
