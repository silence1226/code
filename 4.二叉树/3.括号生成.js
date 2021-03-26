var generateParenthesis = function (n) {
  let result = [];
  _gen('', result, n, n);
  return result;
};

function _gen(list, result, left, right) {
  console.log('list: ', list);
  console.log('right: ', right);
  console.log('left: ', left);
  if (left === 0 && right === 0) {
    result.push(list);
    console.log('result: ', result);
    return;
  }
  if (left > 0) {
    _gen(list + '(', result, left - 1, right);
  }
  if (right > left) {
    _gen(list + ')', result, left, right - 1);
  }
}

console.log('generateParenthesis(n): ', generateParenthesis(2));