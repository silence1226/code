// 创建一个继承 obj 的对象
const myCreate = function (obj) {
  function F() { };
  F.prototype = obj;
  return new F();
}