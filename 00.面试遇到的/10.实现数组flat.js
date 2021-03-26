Array.prototype.myflat = function(depth = 1) {
  let ctx = this; // ctx 是当前数组
  const dep = (arr)=>{
    if(depth <= 0) return arr;
    depth--;
    return arr.reduce((acc, cur)=>{
      return Array.isArray(cur) ? dep([...acc, ...cur])  : [...acc, cur]
    }, [])
  }
  return dep(ctx);
}
