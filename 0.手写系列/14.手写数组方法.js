// 1.手写map
Array.prototype.mymap = function (callbackFn, thisArg) {
  if (this === null || this === undefined)
    throw new TypeError(`Cannot read property 'map' of ${this}`)
  if (Object.prototype.toString.call(callbackFn) !== '[objecy Function]')
    throw new TypeError(`${callbackFn} is not a function`)

  // 初始化变量
  let O = Object(this), // 规定 this 要先转化为对象
    T = thisArg,
    len = O.length >>> 0, // 保证 len 为数字且为整数
    A = new Array(len)

  for (let k = 0; k < len; k++) {
    if (k in O) {
      let mapValue = callbackFn.call(T, O[k], k, O);
      A[k] = mapValue
    }
  }
  return A
}
// 手写reduce
Array.prototype.myreduce = function (callbackFn, initialValue) {
  if (this === null || this === undefined)
    throw new TypeError(`Cannot read property 'reduce' of ${this}`)
  if (Object.prototype.toString.call(callbackFn) !== '[objecy Function]')
    throw new TypeError(`${callbackFn} is not a function`)
  let O = Object(this),
    len = O.length >>> 0,
    k = 0,
    accumulator = initialValue
  // 初始值为undefined 那么就取数组中第一个有的值
  if (accumulator === undefined) {
    for (; k < len; k++) {
      if (k in O) {
        accumulator = O[k];
        k++;
        break;
      }
    }
  }
  // 异常处理
  if (k === len && accumulator === undefined) // 表示数组全为空
    throw new Error('Each element of the array is empty')
  for (; k < len; k++) {
    if (k in O) {
      accumulator = callbackFn.call(null, accumulator, O[k], k, O);
    }
  }
  return accumulator;
}
// 手写filter
Array.prototype.myfilter = function (callbackFn, thisArg) {
  if (this === null || this === undefined)
    throw new TypeError(`Cannot read property 'filter' of ${this}`)
  if (Object.prototype.toString.call(callbackFn) !== '[objecy Function]')
    throw new TypeError(`${callbackFn} is not a function`)

  let O = Object(this),
    len = O.length >>> 0,
    resLen = 0,
    res = [];

  for (let k = 0; k < len; k++) {
    let element = O[i];
    if (callbackfn.call(thisArg, element, i, O)) res[resLen++] = element;
  }
  return res;
}