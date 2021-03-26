// instanceof 类型判断其实就是 原型链 能不能从left 到 right
const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left); // left.__proto__
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto); // 继续向下寻找
  }
}