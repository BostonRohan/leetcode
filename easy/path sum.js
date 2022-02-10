var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (root - targetSum === 0 && !root.left && !root.right) return true;

  return hasPathSum(root, targetSum);
};
