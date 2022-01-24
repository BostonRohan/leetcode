var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];

  let start = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[start] + nums[i] === target) {
      return [start, i];
    } else {
      if (i === nums.length - 1) {
        i = start + 1;
        start++;
      }
    }
  }

  //Window sliding technique
};
console.log(twoSum([15, 20, 30, 7, 4, 12, 0, 50, 100, 1000], 11));
