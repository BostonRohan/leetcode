var isBalanced = function (root) {
  //if there is only one node, it is balanced
  if (root === null) return true;

  //return true or false based on whether the result is -1
  return height(root) !== -1;
};

const height = (node) => {
  //if the node is null return 0
  if (node === null) return 0;

  //traversing the tree on the right and left nodes
  let left = height(node.left);
  let right = height(node.right);

  //if left or right is -1, or the absolute value of left - right is greater than one than it is unbalanced
  if (left === -1 || right === -1 || Math.abs(left - right > 1)) return -1;

  //takes the maximum of the left and right children, and adds the root node
  return Math.max(left, right) + 1;
};

//Second submitted solution
var isBalanced = function (root) {
  let ans = true;

  const height = (node) => {
    //if the node is null, is is balanced return 0
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    //if left-right or right-left is greater than 1, it is unbalanced
    if (left - right > 1 || right - left > 1) ans = false;

    //returning the height of the tree + the root node
    return Math.max(left, right) + 1;
  };
  //recursively call the function
  height(root);
  return ans;
};

// Timed solution (10 min)
const isBalanced = (root) => {
  let ans = true;

  let left = root.left;
  let right = root.right;

  if ((!left.left && right.right) || (!right.left && left.right)) ans = false;

  return isBalanced(root.left) && isBalanced(root.right);
};
