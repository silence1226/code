// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 输入: [4,1,2,1,2]
// 输出: 4
// 方法一 利用 map filter 双次循环
const singleNumber = (nums) => {
  const numsGroup = nums.map(num => nums.filter(v => v === num));
  console.log('numsGroup: ', numsGroup);
  return numsGroup.find(num => num.length === 1)[0];
};
console.log('singleNumber: ', singleNumber([4,1,2,1,2]));

// 方法二 ^ 异或

const singleNumber2 = (nums) => {
  return nums.reduce((acc, cur) => acc ^ cur);
}
// 时间复杂度：
// 仅用 reduce 方法遍历，一层遍历，故为。On
// 空间复杂度：
// 空间复杂度为常量，占用空间没有随数据量 的大小发生改变，故为O1。

