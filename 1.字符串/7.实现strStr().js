// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
// 给定 haystack = 'hello world', needle = 'll'

// 返回2

// 方法一  遍历截取字符串对比
// 思路
// 首先处理几个特殊场景
// needle 的长度为0，直接返回0
// needle 的字符串长度大于 haystack，肯定不匹配
// needle 的字符串长度等于 haystack，判断是否相等，相等则匹配否则不匹配
// 剩下的就是 needle 字符串长度小于 haystack 的情况，遍历 haystack
// 此处需要注意的是，当 haystack 剩余字符串长度小于 needle 长度时，肯定是不相等，无需再次比较。
// 在遍历中判断 将要截取的字符串的首位与 needle 字符串的首位是否相同 ，如果不相同也就不需要后续截取、比较，跳过该次循环
const strStr = (haystack, needle) => {
  const hayLen = haystack.length;
  const nedLen = needle.length;
  // needle 的长度为0，直接返回0
  if (!needle) return 0;
  // needle 的字符串长度大于 haystack，肯定不匹配
  if (nedLen > hayLen) return -1;
  // needle 的字符串长度等于 haystack，判断是否相等，相等则匹配否则不匹配
  if (nedLen === hayLen) return haystack === needle ? 0 : -1;
  for (let i = 0; i <= hayLen - nedLen; i++) {
    // 如果 首位 和 needle 不匹配 那么就继续循环
    if (haystack[i] !== needle[0]) continue;
    if (haystack.substring(i, i + nedLen) === needle) return i;
  }
  return -1;
}
console.log('result ', strStr('hello world', 'world'));