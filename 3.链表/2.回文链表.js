// 请判断一个链表是否为回文链表。
// 输入: 1->2
// 输出: false

// 输入: 1->2->2->1
// 输出: true
// 方法一 字符串拼接比较

const isPalindrome = (head)=> {
  let positiveStr = '';
  let reverseStr = '';
  while (head) {
    const nodeValue = head.value;
    // 正向字符串拼接
    positiveStr += nodeValue;
    // 反向字符串拼接
    reverseStr = nodeValue + reverseStr;
    // 下一个节点
    head = head.next;
  }
  return positiveStr === reverseStr;
}