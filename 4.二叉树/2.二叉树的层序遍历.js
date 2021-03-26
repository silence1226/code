// bfs 广度优先
var levelOrder = function (root) {
  if (!root) return [];
  let queen = [root];
  let res = []; // 存放结果

  while (queen.length > 0) {
    let len = queen.length;
    let arr = [];
    while (len) {
      let node = queen.shift();
      arr.push(node.val);
      if (node.left) queen.push(node.left);
      if (node.right) queen.push(node.right);
      len--;
    }
    res.push(arr)
  }
  return res;
};

// dfs  深度优先
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  dfs(root, 0, res)
  return res
};

function dfs(root, step, res) {
  if (root) {
    if (!res[step]) res[step] = []
    res[step].push(root.val)
    dfs(root.left, step + 1, res)
    dfs(root.right, step + 1, res)
  }
}