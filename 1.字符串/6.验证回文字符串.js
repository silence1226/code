// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 输入: "race a car"
// 输出: false

//方法一 将字符串转换成数组 再对数组首尾一一比较
// 将传入的字符串，利用 toLowerCase() 方法统一转化为小写，再利用正则表达式 /[ ^ A-Za-z0-9]/g 在字符串中去除非字母和数字，最后将字符串转换为数组。
// 转换数组后，利用循环一一比较元素，先比较第一个和最后一个，再比较第二个和倒数二个，依次类推，若中间有不相等则不是回文串，反之，则是回文串。
const isPalindrome = s => {
  // 转化成数组
  const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');
  console.log('arr: ', arr);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
     // 从首尾开始, 一一比较元素是否相等
    if (arr[i] === arr[j]) {
      // 若相等,即第二个元素和倒数第二个元素继续比较,依次类推
      i += 1;
      j -= 1;
    } else {
      // 只要有一个位置对不上 就不是回文串
      return false;
    }
  }
  return true;
}
// O(n) 
// O(n) 数组
console.log('result ', isPalindrome('ab c cBaa'));

// 方法二
// 思路 去除 非字母和数字 然后 利用数组将字符串翻转 再和原字符串进行比较 即可得到结果
// 将传入的字符串，利用 toLowerCase() 方法统一转化为小写，再利用正则表达式 /[ ^ A-Za-z0-9]/g 在字符串中去除非字母和数字，得到字符串 arr。
// 将字符串 arr 转换为数组，利用数组的方法反转数组，再将数组转为字符串 newArr。
// 将字符串 arr 和 字符串 newArr 进行比较，相等即为回文串，不相等则不为回文串。

const isPalindrome2 = s => {
  // 小写 去掉非字母和数字
  const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const newStr = str.split('').reverse().join('');
  // 将2个字符进行比较得出结果
  return str === newStr;
}
// O(n) 
// O(n)