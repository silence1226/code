// call 让后面的具有调用前面的能力  调用完毕后失去
// 原理
let obj = {
  a: 1,
  fn: function () {
    return this.a
  }
}
// 将函数设为对象的属性
// 执行该函数
// 删除该函数

// 第一版
Function.prototype.call2 = function (context) {
  // 首先要获取调用call的函数
  context.fn = this; // 拿到fn
  context.fn();
  delete context.fn;
}
// 第二版 call 可以给参数

Function.prototype.call3 = function (context) {
  context.fn = this;
  var args = [];
  // i从1 开始
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
    // args.push(arguments[i]);
  }
  eval('context.fn(' + args + ')'); // 本质上是字符串拼接 所以 args 会自动调用 toString 方法
  delete context.fn;
}
// var args = ["a1", "b2", "c3"];
// console.log(args);
// ["a1", "b2", "c3"]

// console.log(args.toString());
// a1,b2,c3

// console.log("" + args);
// a1,b2,c3
// 测试一下
var foo = {
  value: 1
};

function bar(name, age) {
  console.log('name', name)
  console.log('age', age)
  console.log('value', this.value);
}

bar.call3(foo, 'kevin', 18); 

// 第三版
// 1.this 参数可以传 null，当为 null 的时候，视为指向 window
// 2.函数是可以有返回值的！
// call 把左边 加到右边的Object 类型中 执行 然后拿到返回值
Function.prototype.call4 = function (context) {
  context = context ? Object(context) : window;
  context.fn = this; // 
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args + ')');  // args 回执行 tosring  变成 
  delete context.fn;
  return result;  // 实现2
}

// ES6版本 实现
Function.prototype.call5 = function (context) {
  context = context ? Object(context) : window;
  var fn = Symbol(); // added
  context[fn] = this; // changed

  let args = [...arguments].slice(1); // 去掉 第一个参数

  let result = context[fn](...args);
  delete context[fn];

  return result;
}

Function.prototype.call6 = function (context) {
  context = context ? Object(context) : window;
  let fn = Symbol();
  context[fn] = this; // 调用者

  let args = [...arguments].slice(1) // 去掉第一个参数
  let result = context[fn](args);
  delete context[fn];
  return result;
}

// ES3 apply  第二个参数是数组
Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window;
  context.fn = this;
  var restult;

  if (!arr) {
    return context.fn();
  } else {
    var args = [];
    for (var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']');
    }
    restult = eval('context.fn(' + args + ')');
  }

  return restult;
}

// ES6 实现 

Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window;
  var fn = Symbol(); // added
  context[fn] = this; // changed
  let result;
  if (!arr) {
    result = context.fn()
  } else {
    result = context.fn(...arr)
  }
  delete context[fn]
  return result;
}
// 其中 context.fn()   fn 必须不存在玉 context 所以要避免属性冲突 
// 解决方案
// ES3 下 使用 hasOwnProperty
while (context.hasOwnProperty(unique_fn)) {
  unique_fn = "fn" + Math.random(); // 循环判断并重新赋值
}
// ES6 可以使用 Symbol 