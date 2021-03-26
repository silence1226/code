// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 示例1
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例2
// 输入: s = "rat", t = "car"
// 输出: false
// 方法一
// 思路
// 首先，将字符串转为数组。
// 利用数组 sort 方法进行排序。 !!! charCodeAt()
// 然后，转为字符串进行比较，如果相等返回 true，反之返回 false。
const isAnagram = (s, t) => {
  const sArr = s.split('');
  const tArr = t.split('');
  const sortFn = (a, b) => {
    return a.charCodeAt() - b.charCodeAt();
  }
  sArr.sort(sortFn)
  tArr.sort(sortFn)

  console.log('retult', sArr.join('') === tArr.join(''));
  return sArr.join('') === tArr.join('')
}
// isAnagram('abc', 'cba')

// 方法二
// 首先，声明一个变量，遍历其中一个字符串 s 或 t，对每个字母出现的次数进行累加。
// 然后，遍历另一个字符串，使每一个字母在已得到的对象中做匹配，如果匹配则对象下的字母个数减 1，如果匹配不到，则返回 false，如果最后对象中每个字母个数都为 0，则表示两字符串相等。
// 利用hash 存储字母个数 然后利用of处理
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return; // 长度不一样直接返回
  const hash = {}
  for (const k of s) {
    hash[k] = hash[k] || 0;
    hash[k] += 1
  }

  for (const k of t) {
    if (!hash[k]) {
      return false;
    }
    hash[k] -= 1;
  }
  return true;
}