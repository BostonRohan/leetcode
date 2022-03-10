//Helper function that takes in the current node, and returns the max of both the right side, and left side recursively.

var maxDepth = function (root) {
  let max = (node, sum) => {
    if (!node) return sum;
    return Math.max(max(node.left, sum + 1), max(node.right, sum + 1));
  };

  return max(root, 0);
};

//timed (10 min)
var maxDepth = (root) => {
  let sum = 0;
  while (root) {
    let left = root.left;
    let right = root.right;
    while (left && right) {
      sum++;
    }
  }
  return sum;
};
