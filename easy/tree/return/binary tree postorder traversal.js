var postorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root],
    ans = [];
  while (stack.length) {
    let curr = stack.pop();
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);

    ans.unshift(curr.val);
  }
  return ans;
};

//example 1

//1. stack = [2] ans = [1]

//2. stack = [3] ans = [2, 1]

//3. stack = [] ans = [3, 2, 1]

//recursion
const postorderTraversal = (root) => {
  return traverse(root, []);
};
const traverse = (root, arr) => {
  if (root.left) traverse(root.left, arr);

  if (root.right) traverse(root.right, arr);

  if (root) arr.push(root.val);

  return arr;
};
