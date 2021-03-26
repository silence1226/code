const debounce = (fn, wait, immediate) => {
  let timer = null;
  const outerArgs = Array.prototype.slice.call(arguments, 2);
  return function (...args) {
    if (immediate && !timer) {
      fn.apply(this, [...args, ...outerArgs])
    }
    clearTimeout(timer) 
    timer = setTimeout(() => {
      fn.apply(this, [...args, ...outerArgs])
      timer = null;
    },wait)
  }
}

const throttle = (fn, wait) => {
  let timer = null;
  const outerArgs = Array.prototype.slice.call(arguments, 2);
  return function (...args) {
    if (!timer) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, [...args, ...outerArgs])
        timer = null;
      }, wait);
    }
  }
}
