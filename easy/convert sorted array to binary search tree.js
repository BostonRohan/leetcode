function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  //error checking
  if (!nums || nums.length < 1) return null;

  const recurse = (nums, start, end) => {
    //base case
    if (start > end) return null;

    //recursive case
    const mid = Math.floor((end + start) / 2);
    //make tree, with mid as the root
    const root = new TreeNode(nums[mid]);

    //create the left branch
    root.left = recurse(nums, start, mid - 1);

    //create the right branch
    root.right = recurse(nums, mid + 1, end);

    return root;
  };
  //return with the input array, the start, and the end
  return recurse(nums, 0, nums.length - 1);
};
