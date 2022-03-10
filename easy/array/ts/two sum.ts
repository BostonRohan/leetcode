function twoSum(nums: number[], target: number): number[] {
  let ans: number[] = [];
  let hash: object = {};

  for (let i = 0; i < nums.length; i++) {
    let dos = target - nums[i]; //difference of sum
    if (hash[dos]) return [nums.indexOf(dos), i];

    hash[nums[i]] = true;
  }

  return ans;
}
