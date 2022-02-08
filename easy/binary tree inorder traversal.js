var inorderTraversal = function (root) {
  let stack = [];
  let ans = [];

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    ans.push(root.val);
    root = root.right;
  }
  return ans;
};
