// new 运算符创建一个用户自定义的对象类型的实例 或具有构造函数的内置对象的实例

// 1. 访问到构造函数里的属性
// 2. 访问到原型里面的属性
// !!! Symbol 不能new

// 第一版

// 它创建了一个全新的对象
// 它会被执行[[Prototype]]（也就是__proto__）链接
// 它使this指向新创建的对象
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用
// objectFactory(name, 'cxk', '18')
// function objectFactory() {
//   const obj = new Object();
//   const Constructor = [].shift.call(arguments);

//   obj.__proto__ = Constructor.prototype;

//   const ret = Constructor.apply(obj, arguments);

//   return typeof ret === "object" ? ret : obj;
// }

// 第二版
function create() {
  // 1、获得构造函数，同时删除 arguments 中第一个参数
  var Con = [].shift.call(arguments); // shift
  // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
  var obj = Object.create(Con.prototype);
  // obj.__proto__ = Con.prototype;
  // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments);
  // 4、优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
};

function objectFactory() {
  // 拿到构造函数
  let Con = [].shift.call(arguments);

  let obj = Object.create(Con.prototype); // 把obj.__proto__ -> Con.prototype
  console.log('obj: ', obj);

  let result = Con.apply(obj, arguments);  // 吧 Con 里面的属性 都给到 result
  console.log('obj: ', obj);

  return result instanceof Object ? result : obj;
}


function objectnew() {
  // 1. 拿到构造函数
  let Con = [].shift.call(arguments);

  let obj = Object.create(Con.prototype);// 把 obj.__proto__ -> Con.prototype

  let result = Con.apply(obj, arguments);

  return result instanceof Object ? result : obj;
}
function Test(name, age) {
  this.name = name;
  this.age = age;
}
Test.prototype.getName = function () { return this.name };

let obj = objectFactory(Test, 'xxxe', 18)

console.log('obj.name', obj.name);
console.log('obj.name2', obj.getName());