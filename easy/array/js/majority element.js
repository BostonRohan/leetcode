var majorityElement = function (nums) {
  let total = 1;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (total >= nums.length / 2) return nums[i];
    if (nums[i] == nums[i + 1]) total++;
    else {
      total = 1;
    }
  }
};
