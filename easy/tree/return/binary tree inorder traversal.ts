function inorderTraversal(root: TreeNode | null): number[] {
  let ans: number[] = [];
  let node: TreeNode | null = root;
  let stack: number[] = [];

  if (!root) return ans;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    ans.push(node.val);
    node = node.right;
  }
  return ans;
}

//Recursive solution???
