// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

// 方法一  滑动窗口
// 方法二  动态规划

// 方法三  贪心算法
// 因为交易次数不受限，如果可以把所有的上坡全部收集到，一定是利益最大化的
const maxProfit = (prices) => {
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans
}
console.log(maxProfit([7,1,5,3,6,4]));