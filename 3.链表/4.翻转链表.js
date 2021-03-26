// 翻转一个链表
// 方法一

// 先判断链表是否为空或者只有一个元素，是的话直接返回；
// 若链表不仅有一个元素，先开辟一个空间存头指针，再把旧的头指针变为新的尾指针；
// 遍历链表，申请一个新的临时空间用于前后元素交换即可。


const reverseList = (head) => {
  if (head === null || head.next === null) return false;
  let pre = null, cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur =next;
  }
  return pre;
}

// 方法二 递归 
// https://gblobscdn.gitbook.com/assets%2F-M5_VgO7Aapcy5begC-C%2F-M6NG6m2j5RfKU1UKwkc%2F-M6NGB7EcRMpJoSMdR9g%2Fimage.png?alt=media&token=c952d954-825b-4c32-b15a-18b748ef137b
const reverseList2 = (head) => {
  if (head === null || head.next === null) return head;
  const newHead = reverseList2(head.next)
  head.next.next = head;
  head.next = null;
  return newHead;
}

// 两个一组 翻转链表
// 双指针
var swapPairs = (head) => {
  if (head === null || head.next === null) return head;
  let node1 = head, node2 = head.next;
  node1.next = swapPairs(node2.next);
  node2.next = node1;
  return node2
}
