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

//Second Solution (10 min timer)
var twoSum = function (nums, target) {
  let j = 0;
  let i = 1;

  while (nums[i] + nums[j] !== target) {
    if (i == nums.length - 1) {
      i = j + 1;
      j++;
    }

    if (nums[i] + nums[j] === target) return [j, i];

    i++;
  }
  return [j, i];
};
