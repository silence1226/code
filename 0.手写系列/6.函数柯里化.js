// es 简洁版
var curry = fn =>
(judge = (...args) =>
  args.length === fn.length
    ? fn(...args)
    : (...arg) => judge(...args, ...arg));

function currying(fn, length) {
  length = length || fn.length;
  return function (...args) {
    return args.length >= length
      ? fn.apply(this, args)
      : currying(fn.bind(this, ...args), length - args.length)
  }
}

function curry(fn, args=[]) {
  return function() {
      let newArgs = args.concat(Array.prototype.slice.call(arguments))
      if (newArgs.length < fn.length) { // 假如：实参个数 < 形参个数
          return curry.call(this, fn, newArgs)
      } else {
          return fn.apply(this, newArgs)
      }
  }
}



function curry(fn, arg = []) {
  return function (...args) {
    let nowArgs = [...arg, ...args];
    if (nowArgs.length >= fn.length) {
      return fn.apply(this, nowArgs)
    } else {
      return curry.call(this, fn, nowArgs)
    }
  }
}