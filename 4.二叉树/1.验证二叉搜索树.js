var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
}

const helper = (root, lower, upper) => {
  if (root == null) return true; // 空节点属于 二叉搜索树
  // 左子树 如果大于根节点 那么返回false
  // 右子树 如果小于根节点 那么返回false
  if (root.val <= lower || root.val >= upper) return false;
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
// 容易理解
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  return root === null || root.val < max && root.val > min && isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};

var isValidBST = function (root) {
  if (root == null) return true;
  // 访问左子树
  if (!isValidBST(root.left)) return false;
  // 访问当前节点
  if (root.val <= pre) return false;
  pre = root.val;
  // 访问右节点
  return isValidBST(root.right);
 }
// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/validate-binary-search-tree/solution/di-gui-morriszhong-xu-bian-li-yi-xing-dai-ma-chao-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。