function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let merge = new ListNode();
  //Keeps track of the original head
  let head = merge;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      //Points the list at list 1
      merge.next = list1;
      //Looks at the next node in list1
      list1 = list1.next;
    } else {
      //Points the list at list 2
      merge.next = list2;
      //Looks at the next node in list2
      list2 = list2.next;
    }
    //Keeps moving the list forward
    merge = merge.next;
  }
  //When list1 reaches null look at list2
  if (!list1) merge.next = list2;
  //When list2 reaches null look at list1
  else merge.next = list1;
  //Return the actual head of the list..
  return head.next;
};
//https://www.youtube.com/watch?v=orCMI6WjoIw&ab_channel=TerribleWhiteboard
