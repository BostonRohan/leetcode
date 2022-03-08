const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) return true;

  return (
    Math.abs(balancedNode(root.left) - balancedNode(root.right)) <= 1 &&
    isBalanced(root.right) &&
    isBalanced(root.left)
  );
};

const balancedNode = (root: TreeNode | null): number => {
  if (!root) return 0;

  return 1 + Math.max(balancedNode(root.left), balancedNode(root.right));
};
