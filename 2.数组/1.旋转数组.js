// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]

// 方法一
// 实际需要循环操作的次数为 k % l。   

// 首先计算出移动次数k
// 通过数组的unshift 和 pop 实现选择 循环执行k次
// unshift() 方法将把它的参数插入数组的头部，并将已经存在的元素顺次地移到较高的下标处，该方法不会创建新数组，而是直接修改原数组。
// pop() 方法将删除数组的最后一个元素，把数组长度减 1，并且返回它删除的元素的值

const ratate = (nums, k) => {
  const l = nums.length;
  k = k % l;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
}

// 方法二
const rotate2 = function (nums, k) {
  const l = nums.length;
  k = k % l;
  console.log('l - k: ', l - k);
  console.log('k: ', k);
  nums.unshift(...nums.splice(l - k, k)); 
  return nums;
};

console.log('result', rotate2([1,2,3,4,5,6,7], 3));