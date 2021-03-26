// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 由于题目要求必须在原数组上操作，数组的 filter Api 或是 sort 算法，都是不必考虑的。
// 切记不要边遍历数组边修改数组长度，如：splice，push，pop等。

const moveZeroes = nums => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++
    }
  }
  nums.fill(0, j, nums.length);
}

// 方法二 双指针优化
const moveZeroes2 = function (nums) {
  let j = 0;
  let temp = '';
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};