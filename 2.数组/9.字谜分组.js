// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// 方法一 
// 我们先遍历数组，把每个字母异位词都进行排序。再将排序后的字符串作为 key，将 key 值一样的字母异位词置于同一个数组中。最后，再按照题目所要求的格式返回数组。
const groupAnagrams = function (strs) {
  const obj = {};
  const arr = [];
  // 遍历数组
  for (let i = 0; i < strs.length; i++) {
    // 将每个字母异位词进行排序，并将排序后的字符串作为 key
    const unit = Array.from(strs[i]).sort().join('');
    // 将 key 值一样的字母异位词置于同一个数组中
    if (!obj[unit]) {
      obj[unit] = [];
    }
    obj[unit].push(strs[i]);
  }
  for (const i in obj) {
    arr.push(obj[i]);
  }
  return arr;
};