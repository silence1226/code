// 给定一个链表，判断链表中是否有环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

// 最常见的有三种方法判断： 1. 双指针法 2. 哈希表法 3. 利用 Symbol 的特性

// 方法一 双指针 
// 快慢指针  定义两个指针 初始位置都是在链表头部 快指针一次两步  慢指针一次一步

const hasCycle = (head) => {
  if (!head) return false;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = fast.next;
    if (fast === slow) return true;
  }
  return false;
}

// 哈希表
// 利用map
const hasCycle2 = (head) => {
  if (!head) return false;
  const newData = new Map();
  while (head) {
    if (newData.has(head)) return true;
    newData.set(head, 1);
    head = head.next;
  }
  return false;
}

// 删除链表中的节点
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};