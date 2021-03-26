// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。假定只有小写字母
// s = "leetcode"
// 返回 0.
// s = "loveleetcode",
// 返回 2.

// 方法一 使用库函数  
// 某个字符从头开始的索引和从尾开始找的索引相等 那么说明只出现了一次

const firstUniqChar = s => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}
// 时间复杂度 O(n^2)
// console.log(firstUniqChar('loveleetcode'));

// 方法二 哈希
// 第一次遍历 用哈希对象记录出现的次数 第二次遍历 找出只出现1次的下标
const firstUniqChar2 = s => {
  let hask = {};
  for (let i = 0; i < s.length; i++) {
    if (hask[s[i]]) {
      hask[s[i]] = hask[s[i]] + 1;
    } else {
      hask[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (hask[s[i]] === 1) {
      return i
    }
  }
  return -1;
}
console.log(firstUniqChar2('loveleetcode'));

