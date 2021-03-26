// 快手一面
function formatColor(color) {
  if(!color) return;
  let result = '';
  //let numArr = color.substring(0, 4);
  let numArr2 = color.replace(/^RGB\(/, '').replace(')', '').split(',')
  result = numArr2.reduce((acc, cur)=>{
    let num = parseInt(cur).toString(16)
    if(num == 0) num = '00';
    if(num.length === 1) num = '0' + num;
    return acc + num.toLocaleUpperCase()
  }, '#')
  console.log(result);
  return result;
}

formatColor('RGB(0, 10, 255)')