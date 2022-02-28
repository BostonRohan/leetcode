//1. two pointers, one that moves twice as fast as the other

//2. if the two pointers meet there is a cycle

var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
};

//solve using hash
