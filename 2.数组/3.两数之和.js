// 给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// 利用 map 哈希
// 将每个元素的值和它的索引添加到表中
// 检查每个元素所对应的目标元素（target - nums[i]）是否存在于表中

const twoSum = (nums, target) => {
  let lookUp = {};
  let res = [];
  // 0 2 1 7
  nums.some((v, i) => {
    if (lookUp[target - v] !== undefined) {
      res = [lookUp[target - v], i];
      return true
    } else {
      lookUp[v] = i;
      return false
    }
  })

  return res;
}

console.log('twoSum: ', twoSum([2, 7, 11, 15], 9));