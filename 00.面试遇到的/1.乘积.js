const cale = (n) => {
  let arr = [];
  let i = 2;
  while (i < n) {
    if (n % i === 0) {
      arr.push(i);
      n = n / i;
    } else {
      i++
    }
  }
  arr.push(n)
  return arr;
}
// const cale = (num) => {
//   if (num <= 1) {
//     return null
//   }
//   // 获取数组中的数
//   function getnum(_num) {
//     let count = 0
//     for (var i = 2; i <= _num; i++) {
//       if (_num % i === 0) {
//         count = i
//         break;
//       }
//     }
//     return count
//   }
//   let arr = []
//   // fn(n) = fn(n-1)*fn(n-2)
//   function sss(num1) {
//     const num2 = getnum(num1)
//     if (num2 < 2) {
//       return
//     }
//     arr.push(num2)
//     return sss(num1 / num2)
//   }
//   sss(num)
//   return arr
// }

console.log('2=====>', cale(2));
console.log('8=====>', cale(8));
console.log('13=====>', cale(13));
console.log('14=====>', cale(14));
console.log('24=====>', cale(24));
console.log('30=====>', cale(30));
console.log('10=====>', cale(10));
console.log('27=====>', cale(27));
console.log('49=====>', cale(49));
console.log('81=====>', cale(81));
console.log('99=====>', cale(99));
console.log('121=====>', cale(121));

// 8  [2,2,2]
// 13 [13]
// 24 [2,2,2,3]
// 30 [2,3,5]