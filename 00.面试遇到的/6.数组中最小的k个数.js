// 实现一个function，输入参数为一个数组arr，和一个数字k，arr中全是数字，k小于arr的长度，要求返回arr中最小的k个数字，且保持原数组顺序 例如：
// 输入：[1,2,3,5,6,3,2]，3 返回：[1,2,2] 
// 输入：[1,2,3,5,6,3,2]，4 返回：[1,2,3,2] 
// 输入：[1,2,3,5,6,3,2]，5 返回：[1,2,3,3,2]
function findKey(obj, value, compare = (a, b) => a === b) {
  return Object.keys(obj).find(k => compare(obj[k], value))
}
function findMin(arr, k) {
  let obj = arr.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, {})
  let newArr = arr.slice().sort().splice(0, k);
  let result = new Array(newArr.length);
  newArr.forEach((item) => {
    let key = findKey(obj, item);
    if (key !== undefined) {
      result[key] = item;
      delete obj[key];
    }
  })
  return result.join('').split('')
}

function findMin2(arr, k) {
  let newArr = []; // 最大长度是3
  let max = 0;
  let index = 0; // 记录最大得下标
  for (let i = 0; i < arr.length; i++) {
    if (newArr.length < k) {
      newArr.push(arr[i])
      max = Math.max(arr[i], max);
      if (max === arr[i]) {
        index = newArr.length - 1;
        console.log('index:2 ', index);
      }
    }
    else {
      if (arr[i] < max) {
        console.log('max: ', max);
        // 找到里面最大得 删掉 然后push进去
        console.log('newArr: ', newArr);
        console.log('index: ', index);
        newArr.splice(index, 1);
        console.log('newArr: ', newArr);
        newArr.push(arr[i]);
        max = Math.max(arr[i], max);
        if (max === arr[i]) {
          index = newArr.length - 1;
        }
      }

    }
  }
  return newArr
}

console.log('result', findMin([1, 2, 3, 5, 6, 3, 2], 5))