import { TreeNode } from "./type";

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left: number = minDepth(root.left);
  const right: number = minDepth(root.right);

  if (left === 0 || right === 0) {
    //skewed tree
    //where one side is 0
    return 1 + Math.max(left, right);
  }

  return 1 + Math.min(left, right);
}
