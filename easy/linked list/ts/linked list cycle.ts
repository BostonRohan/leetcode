import { ListNode } from "./type";

function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode = head;
  let slow: ListNode = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
}

//Floyd's Tortoise & Hare

//two pointers
