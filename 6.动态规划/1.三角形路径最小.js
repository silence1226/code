var minimumTotal = function(triangle) {
  const bottom = triangle[triangle.length - 1];
  const dp = new Array(bottom.length);
  // base case 是最后一行
  for (let i = 0; i < dp.length; i++) {
    dp[i] = bottom[i];
  }
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0]
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])
console.log('minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]): ', minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));