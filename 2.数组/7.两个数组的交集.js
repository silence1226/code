// 给定两个数组，计算数组交集。
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]


// 方法一模拟哈希
const intersect = (nums1, nums2) => {
  const hasObject = {};
  for (let i = 0; i < nums1.length; i++) {
    if (hasObject[nums1[i]]) {
      hasObject[nums1[i]]++
    } else {
      hasObject[nums1[i]] = 1;
    }
  }

  let result = [];
  for (let j = 0; j < nums2.length; j++) {
    if (hasObject[nums2[j]]) {
      result.push(nums2[j])
      hasObject[nums2[j]] -= 1;
    }
  }
  return result;
}
console.log('intersect', intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// 方法二长短数组
