var minDepth = function (root) {
  if (!root) return 0;

  let queue = [];
  queue.push(root);
  let depth = 0;

  while (queue.length > 0) {
    let nodes = queue.length;

    while (nodes > 0) {
      let curr = queue.shift();

      if (curr.left) queue.push(curr.left);

      if (curr.right) queue.push(curr.right);

      if (!curr.left && !curr.right) return depth + 1;

      nodes--;
    }
    depth++;
  }
};

//queue implementation

//(first one to be removed, is the first one added)

//[1] [1, 2] [1, 2, 3]

//[2, 3]

//[3]

//breath first search

//second solution
var minDepth = (root) => {
  if (!root) return [];

  let queue = [root];
  let depth = 1;

  while (queue[0]) {
    let len = queue.length;
    while (len--) {
      let curr = queue.shift();

      if (!curr.left && !curr.right) return depth;

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    depth++;
  }
};
