//双重循环
function unique(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = res.length; j < len; j++) {
      if (res[j] === arr[i]) break;
      if(j === len) res.push(arr[i])
    }
  }
  return res;
}
// indexOf
function unique(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (res.indexOf(cur) === -1) res.push(cur);
  }
  return res;
}
function unique(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
// 排序后去重
function unique(arr) {
  return arr.concat().sort().filter((item, index)=>{
      return !index || item !== arr[index - 1]
  })
}
// ES6
function unique(arr) {
  return [...new Set(arr)];
}

// 或者可以这样，利用 Map
function unique (arr) {
  const last = new Map()
  return arr.filter((item) => !last.has(item) && last.set(item, 1))
}