// 1. Base case, if the root is null, we've reached the end of the tree stop iterating

// 2. The tree should be a mirror of itself, if the left is not equal to the right it is not a mirror

// 3. Recursively call the function passing in the left and right nodes of the respective trees

var isSymmetric = function (root) {
  if (!root) return true;

  return checkSymmetric(root.left, root.right);
};

const checkSymmetric = (tree1, tree2) => {
  if (!tree1 || !tree2) return tree1 === tree2;

  if (tree1.val != tree2.val) return false;

  return (
    checkSymmetric(tree1.left, tree2.right) &&
    checkSymmetric(tree1.right, tree2.left)
  );
};
