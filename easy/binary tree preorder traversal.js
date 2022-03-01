var preorderTraversal = function (root) {
  let stack = [],
    ans = [];
  //While the stack isn't empty and root exists
  while (root || stack.length !== 0) {
    //while root exists
    while (root) {
      //push the root into the stack
      stack.push(root);
      //push the subsequent value
      ans.push(root.val);
      //traverse to the left
      root = root.left;
    }
    //bounce back to the latest node
    root = stack.pop();
    //traverse to the right
    root = root.right;
  }
  return ans;
};
