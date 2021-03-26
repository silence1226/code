// 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]

// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
// 想法一 就是nums 想乘  然后 除以 自己 但是不能用除法
// 先计算 左侧 再计算右侧
const productExceptSelf = nums => {
  const len = nums.length;
  const result = []; // 最终结果
  const leftProduct = [];// 存放左侧
  const rightProduce = []; // 存放右侧
  leftProduct[0] = 1;
  rightProduce[len - 1] = 1;

  // 计算左侧

  for (let i = 1; i < len; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }

  for (let j = len - 2; j >= 0; j--) {
    rightProduct[j] = rightProduct[j + 1] * nums[j + 1];
  }
  // 左侧数字的乘积 * 右侧数字的乘积
  for (let k = 0; k < len; k += 1) {
    result[k] = leftProduct[k] * rightProduct[k];
  }
  return result;
};

// 优化 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf2 = (nums) => {
  const len = nums.length;
  const result = [1];
  let right = 1;
  // 计算左侧数字的乘积，存到 result 中
  for (let i = 1; i < len; i += 1) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  // 用变量 right 存储每个数字右侧的乘积，并且进行累积相乘
  for (let j = len - 1; j >= 0; j -= 1) {
    result[j] *= right;
    right *= nums[j];
  }
  return result;
};