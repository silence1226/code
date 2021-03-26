// 递归写法  O2n
function fib(n) {
  if (n === 1 || n === 2) return  1;
  return fib(n - 1) + fib(n - 2);
}
// 迭代方式
function fib(n) {
  if (n < 1) return 0;
  if (n == 2 || n == 1) 
      return 1;
  let prev = 1, curr = 1;
  for (let i = 3; i <= n; i++) {
      let sum = prev + curr;
      prev = curr;
      curr = sum;
  }
  return curr;
}
console.log('fib: ', fib(10));