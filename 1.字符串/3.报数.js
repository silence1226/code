// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 输入: 1
// 输出: "1"
// 输入: 4
// 输出: "1211"

// 方法一 递归  !!! 重点在 new RegExp(/(\d)\1*/g)
// 想要获取第n个 项的结果 需要先获取第n-1的结果
const countAndSay = (n) => {
  if (n === 1) { return '1' };
  const preResult = countAndSay(n - 1); // 获取第n-1项结果
  /**
    * \d 匹配一个数字
    * \1 匹配前面第一个括号内匹配到的内容
    * (\d)\1* 匹配相邻数字相同的内容
    * 使用replace方法将匹配到的内容处理为长度 + 内容的第一个字符
    * 结果为所求报数
    **/
  return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
}
// 时间复杂度 On  空间复杂度 On
// function replacer(match, p1, p2, p3, offset, string) {
//   console.log('match: ', match);
//   console.log('p1: ', p1);
//   console.log('string: ', string);
//   console.log('offset: ', offset);
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// // var newString = '111211'.replace(/(\d)\1*/g, replacer);
// console.log(newString);  // abc - 12345 - #$*%

// 方法2  循环
// 循环和递归正好相反
const countAndSay2 = (n) => {
  let result = '1';
  for (let i = 1; i < n; i++) {
    result = result.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
  }
  console.log('result: ', result);
  return result;
}
countAndSay2(1)
countAndSay2(2)
countAndSay2(3)
countAndSay2(4)
