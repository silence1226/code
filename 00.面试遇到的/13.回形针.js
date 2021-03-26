//line=readline()
//print(line)
// 
function loopArr(arr) {
  let n = arr.length;
  let hasVis = {}; // 存放已经读取过的点
  let queen = [1, 2, 3, 4]; // 规定得四种转向方式
  // 1 i++ j不动  2 i不动 j++  3 i-- j不动 4 i不动 j--
  let i = 0; // 双指针进行循环
  let j = 0;
  let result = []
  let type = queen.shift();
  const change = () => {
    type = queen.shift(); // 取出下一个要转向的形式[]
    console.log('type: ', type);
    queen.push(type);
    if (type === 1) {
      i++;
    } else if (type === 2) {
      j++
    } else if (type === 3) {
      i--;
    } else {
      j--
    }
  }
  while (true) {
    console.log('result.length', result.length);
    if (result.length === n * n) break;
    if (i === n - 1 || j === n - 1) {
      change();
      continue;
    }
    if (hasVis[String(j) + String(i)]) {
      change();
      continue;
    }
    result.push(arr[j][i]);
    hasVis[String(j) + String(i)] = true;
    if (type === 1) {
      i++;
    } else if (type === 2) {
      j++
    } else if (type === 3) {
      i--;
    } else {
      j--
    }
  }
  return result;
}
console.log(loopArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));