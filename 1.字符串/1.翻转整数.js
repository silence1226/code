// 示例 1:
// 输入: 123
// 输出: 321

// 示例 2:
// 输入: -123
// 输出: -321

// 示例 3:
// 输入: 120
// 输出: 21
// 首先设置边界极值；
// 使用字符串的翻转函数进行主逻辑；
// 补充符号
// 然后拼接最终结果
const reverse = (x) => {
  // 非空判断
  if (typeof x !== 'number') return;
  // 极值
  const MAX = 2147483647;
  const MIN = -2147483648;

  const rest = x > 0 ? String(x).split('').reverse().join('') : String(x).slice(1).split('').reverse().join('');

  const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);

  // 边界情况
  if (result >= MIN && result <= MAX) {
    console.log('result: ', result);
    return result;
  }

  return 0;
}
// 时间复杂度 O(n)  空间复杂度 O(n)
// reverse(-123)
