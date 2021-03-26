// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 方法一
// 维护一个数组 如果字母不存在那么push 进去 如果存在 就shift 直到删掉重复的  记录 最长的子串
const lengthOfLongestSubstring = function (s) {
  let current = 0;
  let max = 0;
  const list = [];
  const len = s.length;
  for (; current < len; current++) {
    if (list.indexOf(s[current]) === -1) {
      list.push(s[current]);
    } else {
      do {
        list.shift();
      } while (list.indexOf(s[current]) !== -1);
      list.push(s[current]);
    }
    max = Math.max(list.length, max);
    console.log('list: ', list);
  }
  return max;
};
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('pwwkeww'));