function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let merge = new ListNode();
  let head = merge;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      merge.next = list1;
      list1 = list1.next;
    } else {
      merge.next = list2;
      list2 = list2.next;
    }
    merge = merge.next;
  }
  if (!list1) merge.next = list2;
  else merge.next = list1;
  return head.next;
};
console.log(mergeTwoLists([1, 3, 4, 5, 7], [4, 3, 2]));
