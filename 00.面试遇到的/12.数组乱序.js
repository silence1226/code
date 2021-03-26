function unsort(arr) {
  let len = arr.length;
  let len2 = len;
  let newArr = new Array(len);
  // 然后进行循环 随机去取原数组
  for(let i =0; i < len; i++) {
    let index = Math.floor(Math.random() * len2);
    newArr[i] = arr[index];
    len2--;
    arr.splice(index, 1);
  }
  return newArr;
}