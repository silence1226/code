// https://leetcode-cn.com/proble...
极客时间版权所有: https://time.geekbang.org/course/detail/100019701-67638

const solveNQueens = (n) => {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const cols = new Set();  // 列集，记录出现过皇后的列
  const diag1 = new Set(); // 正对角线集
  const diag2 = new Set(); // 反对角线集
  const res = [];

  const helper = (row) => {
    if (row == n) {
      const stringsBoard = board.slice();
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('');
      }
      res.push(stringsBoard);
      return;
    }
    for (let col = 0; col < n; col++) {
      // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) { 
        board[row][col] = 'Q';  // 放置皇后
        cols.add(col);          // 记录放了皇后的列
        diag1.add(row + col);   // 记录放了皇后的正对角线
        diag2.add(row - col);   // 记录放了皇后的负对角线
        helper(row + 1);
        board[row][col] = '.';  // 撤销该点的皇后
        cols.delete(col);       // 对应的记录也删一下
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  };
  helper(0);
  return res;
};

console.log(solveNQueens(4));