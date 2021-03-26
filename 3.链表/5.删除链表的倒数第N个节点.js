// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// 方法一 双指针法
// 快慢指针 先让快指针向前走 n 然后一起移动 快的走到最后 那么 慢点的下一个节点是要删除的节点
// 指针 first 指向头节点，然后，让其向后移动 n 步。
// 指针 second 指向头结点，并和 first 一起向后移动。当 first 的 next 指针为 null 时，second 即指向了要删除节点的前一个节点。
// 指针 first 的 next 指向要删除节点的下一个节点

const removerFromEnd = (head, n) => {
  let first = head;
  let slow = head;
  while (n > 0) {
    first = first.next;
    n -= 1;
  }
  if (!first) return head.next;
  while (first.next) {
    first = first.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return slow;
}
