var minDepth = function(root) {
  // 异常处理
  if(root == null) return 0;
  let queen = [];
  queen.push(root);
  let depth = 1;
  while(queen.length) {
    let len = queen.length;
    for(let i = 0;i<len;i++) {
      let node = queen.shift();
      if(node.left == null && node.right == null) return depth;
      if(node.left) queen.push(node.left);
      if(node.right) queen.push(node.right);
    }
    depth++;
  }
  return depth;
};