// 1. Base case first, if the iteration is at the bottom of their respective trees and they're both null then the whole tree is checked.

// 2. If they're not equal, don't keep iterating

// 3. Comparing each respective node on either side of the tree recursively calling the function

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;

  if (
    (p === null && q !== null) ||
    (q === null && p !== null) ||
    p.val !== q.val
  )
    return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
