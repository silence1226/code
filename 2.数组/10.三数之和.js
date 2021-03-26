// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 方法一  暴力法
// 直接三重循环 利用 哈希表记录 已经有了某个三元组


// 方法二 快慢指针
// 首先对数组进行排序，便于在插入的时候去重，进行双指针遍历时，遇到重复的数就可以很方便得跳过。

// const threeSum = nums => {
//   const res = [];
//   nums.sort((a, b) => a - b);
//   const len = nums.length;
//   //循环 
//   for (let i = 0; i < len; i++) {
//     let left = i + 1;
//     let right = len - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0) {
//         res.push(nums[i], nums[left], nums[right]);

//         // 去重
//         const leftValue = nums[left];
//         while (left < len && nums[left] === leftValue) {
//           left++;
//         }
//         const rigthValue = nums[right];
//         while (right > left && nums[right] === rigthValue) {
//           right--;
//         }
//       } else if (sum < 0) {
//         // 小于 0 说明太小了 需要向右走
//         left++;
//       } else {
//         // 太大了 指针向右移动
//         right--;
//       }
//     }
//     while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
//       i++
//     }
//   }
//   return res;
// }

// const threeSum = function (nums) {
//   const res = [];
//   nums.sort((a, b) => a - b);
//   const length = nums.length;

//   for (let i = 0; i < length; i++) {
//     let left = i + 1;
//     let right = length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0) {
//         res.push([nums[i], nums[left], nums[right]]);

//         const leftValue = nums[left];

//         // 这两步是为了去重
//         while (left < length && nums[left] === leftValue) {
//           left++;
//         }
//         const rightValue = nums[right];
//         // 去重
//         while (right > left && nums[right] === rightValue) {
//           right--;
//         }
//       } else if (sum < 0) {
//         // 小于 0 说明太小了，需要向右移动
//         left++;
//       } else {
//         // 太大了，把右边的指针向左移动
//         right--;
//       }
//     }
//     // 去重
//     while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
//       i++;
//     }
//   }
//   return res;
// };

var threeSum = function (nums) {
  if (!nums || nums.length < 3) return [];
  let ans = [];
  nums.sort((a, b) => a - b);
  console.log('nums: ', nums);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    console.log('i: ', nums[i]);
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      console.log('sum: ', sum);
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        console.log('ans: ', ans);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        // 需要向右边移动
        left++
      } else {
        right--;
      }
    }
  }
  return ans;
};

threeSum([-1,0,1,2,-1,-4])