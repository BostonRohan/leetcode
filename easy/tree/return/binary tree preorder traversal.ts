import { TreeNode } from "../ts/type";
function preorderTraversal(root: TreeNode | null): number[] {
  let ans: number[] = [];
  let stack: TreeNode[] = [root];
  if (!root) return ans;

  while (stack.length > 0) {
    const node: TreeNode = stack.pop();

    if (!node) continue;

    ans.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }
  return ans;
}

//Recursive solution??
