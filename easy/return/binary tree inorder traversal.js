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

//Timed solution (10min)
const inorderTraversal = (root) => {
  let stack = [];
  let ans = [];

  while (root) {
    if (!root.left || !root.right) {
      root = stack.pop();
    }
    stack.push(root.left);
    stack.push(root.right);
    ans.push(root.val);
  }
  return ans;
};
