//1. iterate through the arr

//2. if it is not in the stack push it in

//3. otherwise remove it from the stack

var singleNumber = function (nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    if (stack.indexOf(nums[i]) < 0) {
      stack.push(nums[i]);
    } else {
      stack.splice(stack.indexOf(nums[i]), 1);
    }
  }
  return stack.join("");
};
