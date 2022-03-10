import { TreeNode } from "../ts/type";
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left: number = maxDepth(root.left);
  const right: number = maxDepth(root.right);

  return 1 + Math.max(left, right);
}
