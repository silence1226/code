// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// const longestPaindrome = s => {
//   const dp = [];
//   for (let i = 0; i < s.length; i++) {
//     dp[i] = [];
//   }

//   let max = -1; let str = '';
//   for (let l = 0; l < s.length; l++) {
//     for (let i = 0; i + l < s.length; i++) {
//       const j = i + l;
//       // i 为子串开始的左下标 j为子串开始的右下标
//       if (l === 0) {
        
//       }
//     }
//   }
// }

// 状态定义
// dp[i,j]：字符串s从索引i到j的子串是否是回文串
// true： s[i,j] 是回文串
// false：s[i,j] 不是回文串
// 转移方程
// dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
// s[i] == s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
// dp[i+1][j-1]：true
// 说明s[i,j]的**子串s[i+1][j-1]**也是回文串
// 说明，i是从最大值开始遍历的，j是从最小值开始遍历的
// 特殊情况
// j - i < 2：意即子串是一个长度为0或1的回文串
// 总结
// dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2)

// var longestPalindrome = function(s) {
//   let n = s.length;
//   let res = '';
//   let dp = Array.from(new Array(n),() => new Array(n).fill(0));
//   for(let i = n-1;i >= 0;i--){
//     console.log('i: ', i);
//       for(let j = i;j < n;j++){
//         console.log('  j: ', j);
//           dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
//           if(dp[i][j] && j - i +1 > res.length){
//               res = s.substring(i,j+1);
//           }
//       }
//   }
//   return res;
// };


const longgerPalindrome2 = s => {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; i < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
}
// const longestPalindrome = function (s) {
//   const dp = [];
//   for (let i = 0; i < s.length; i += 1) {
//     dp[i] = [];
//   }
//   let dp = Array.from(new Array(n),() => new Array(n).fill(0));
//   let max = -1; let str = '';
//   for (let l = 0; l < s.length; l += 1) {
//     // l为所遍历的子串长度 - 1，即左下标到右下标的长度
//     for (let i = 0; i + l < s.length; i += 1) {
//       const j = i + l;
//       // i为子串开始的左下标，j为子串开始的右下标
//       if (l === 0) {
//         // 当子串长度为1时，必定是回文子串
//         dp[i][j] = true;
//       } else if (l <= 2) {
//         // 长度为2或3时，首尾字符相同则是回文子串
//         if (s[i] === s[j]) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = false;
//         }
//       } else {
//         // 长度大于3时，若首尾字符相同且去掉首尾之后的子串仍为回文，则为回文子串
//         if ((s[i] === s[j]) && dp[i + 1][j - 1]) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = false;
//         }
//       }
//       if (dp[i][j] && l > max) {
//         max = l;
//         str = s.substring(i, j + 1);
//       }
//     }
//   }
//   return str;
// };

console.log('result', longestPalindrome('abaa'));

// 方法二 中心扩展

// 回文子串一定是对称的  所以我们每次选择一个中心 然后判断两边
// 长度奇数 以单个字符为中心
// 长度偶数 以两个字符之间的空隙为中心

const longestPalindrome3 = s => {
  if (s == null || s.length < 1) return '';
  if (s.length < 2) return s;
  // 
  let start = 0;
  let end = 0;
  const expandCenter = (s, left, right) => {
    while (left > 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  for (let i = 0; i < s.length; i++) {
    // 中心的两种选取
    const len1 = expandCenter(s, i, i);
    const len2 = expandCenter(s, i, i+1);
    // 两种组合最大的回文子串长度
    const len = Math.max(len1, len2);
    if (len > end - start) {
      // start = i - ((maxLen - 1) >> 1);
      // end = i + (maxLen >> 1);
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor((len / 2));
    }
  }
  return s.substring(start, end + 1);
}