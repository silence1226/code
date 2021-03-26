// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 方法一 递归
// 获取数组中第一个字符串，当做最长公共前缀保存到变量 commonPrefix
// 从数组中取出下一个字符串，与当前的最长公共前缀 commonPrefix 对比，得到新的最长公共前缀存到 commonPrefix
const longgetCommonPrefix = strs => {
  const findCommonPrefix = (a, b) => {
    let i = 0;
    while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
      i++
    }
    return i > 0 ? a.substring(0, i) : '';
  }
  if (strs.length > 0) {
    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      commonPrefix = findCommonPrefix(commonPrefix, strs[i]);
    }
    return commonPrefix;
  }
  return ''
}
// 时间复杂度On  时间O1

// 方法二 遍历