var removeDuplicates = function (nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
    i++;
  }
};
console.log(removeDuplicates([1, 1, 2]));
