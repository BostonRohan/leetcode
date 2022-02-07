function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    //Skips over the duplicate next property
    if (curr.val === curr.next.val) curr.next = curr.next.next;
    //Moves curr ahead on each loop
    else curr = curr.next;
  }
  return head;
};
