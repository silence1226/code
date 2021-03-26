// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用  的额外空间解决这一问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 输入：["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]

// 首尾替换法  利用es6语法
// 详解
// 设置变量 i = 0；
// 替换字符串的第i位和倒数第 i 位，替换方式：使用es6的解构赋值进行变量的交换；
// 变量 i + 1，继续替换替换字符串的第 i 位和倒数第 i 位；
// 直到 i 大于字符串s的长度的中位数，完成真个字符串的反转
const reverseString = s => {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]; // 解构赋值
  }
  console.log('s: ', s);
  return s;
}
reverseString(['a', 'b', 'H'])

// 方法2  新增一个变量 作为中间值

const reverseString2 = s => {
  for (let i = 0; i < s.length / 2; i++) {
    let a = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = a;
  }
}