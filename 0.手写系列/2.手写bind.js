// 手写bind
// bind() 方法会创建一个新函数，当这个新函数被调用时，它的 this 值是传递给 bind() 的第一个参数，传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。bind返回的绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
// bind 和 call apply 最大的不同是 前者会返回一个绑定的上下文函数  而后者是 直接执行
// bind 特效 
// 1、可以指定this
// 2、返回一个函数
// 3、可以传入参数
// 4、柯里化
// #

// 实现要点 slice  不用针对conext操作
// 模拟 bind 会是用到call  aplly

// 第一版本

Function.prototype.bind2 = function (context) {
  var self = this; // this 指向 调用者
  return function () {
    return self.apply(context);
  }
}
// 2,3 
// 指定 this
// 返回一个函数
// 可以传参
// 柯里化
Function.prototype.bind3 = function (context) {
  var self = this;
  // 实现第三个 因为第一个参数是指定的this 所以截取到第一个参数就是后面的参数
  // arr.slice(begin)  相当于 slice(begin, end)
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // 实现第四点 柯里化
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs))
  }
}
// 版本三
// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
Function.prototype.bind4 = function (context) {
  var self = this;

  var args = Array.prototype.slice.call(arguments, 1);
  
  var FBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof FBound ? this : context, args.concat(bindArgs))
  }

  fBound.prototype = this.prototype; // 这样会导致 修改 实例原型的时候 会改变 this.prototype 的原型
  return fBound;
}


// 解决方案 
// var FNOP = function () { }; // 创建一个空对象
// FNOP.prototype = this.prototype; // 空对象的原型指向绑定函数的原型
// fBound.prototype = new FNOP(); // 空对象的实例赋值给 fBound.prototype
// 也可直接使用ES5 的 Object.create() 生成

// 实现

Function.prototype.bind5 = function (context) {
  var self = this;
  if (typeof this !== "function") throw new Error('必须是函数')
  
  var args = Array.prototype.slice.call(arguments, 1);

  var FNOP = function () { }
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  FNOP.prototype = this.prototype; //
  fBound.prototype = new FNOP();
  return fBound;  
}


Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;

  var fbound = function () {
      self.apply(this instanceof self ? 
          this : 
          context, args.concat(Array.prototype.slice.call(arguments)));
  }

  fbound.prototype = Object.create(self.prototype);

  return fbound;
}