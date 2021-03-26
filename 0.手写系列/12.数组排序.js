// https://juejin.cn/post/6902060047388377095#heading-8
// 冒泡排序
// 把最大得冒泡到最后面
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}
// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
// }
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// 选择排序
// 最稳定得排序算法之一  不占用额外得内存空间
// 遍历自身以后的元素，最小的元素跟自己调换位置。
function selectSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// 插入排序
// 将元素 插入到已经排序好得数组中
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr
}
// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j+1]= key;
//   }
//   return arr;
// }
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) { // 默认arr[0] 已经排序得数组
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }
// 希尔排序 shell 


// 快速排序
// 实现思路：选择基准值 mid，循环原数组，小于基准值放左边数组，大于放右边数组，然后 concat 组合，最后依靠递归完成排序。
function quickSort(arr) {
  if (arr.length <= 1) return arr; // 递归终点
  let left = [], right = [], mid = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}
// 存在得最差情况
// 1. 数组已经是排好序的，并且你每次基准 pivot 选的是数组最左面或者是最右面
// 2. 所有元素都相同
// 三数取中
function getMedian(left, middle, right) {
  var temp = [left];
  middle > left ? temp.push(middle) : temp.unshift(middle);
  if (right > temp[1]) {
    temp.push(right);
  } else if (right < temp[0]) {
    temp.unshift(right);
  } else {
    temp.splice(1, 0, right);
  }
  return temp[1];
}

function quicksort(arr) {
  // 如果子集只剩下一个元素，或者没有元素，就直接返回该数组
  if (arr.length <= 1) {
    return arr;
  }
  var middleIdx = Math.floor(arr.length / 2);
  // 三数取中
  var pivot = getMedian(arr[0], arr[middleIdx], arr[arr.length - 1]);

  // 定义左子集和右子集和与基准相同的集
  var left = [];
  var right = [];
  var same = [];
  // 遍历，小于基准的元素移到基准的左边，大于基准的元素移到基准的右边，相同的暂存起来不需要再排序
  for (var i = 0, j = arr.length; i < j; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      same.push(arr[i]);
    }
  }
  // 最后返回左边子集，基准，右边子集的结合数组
  return quicksort(left).concat(same, quicksort(right));
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log('quickSort', quickSort(arr));//