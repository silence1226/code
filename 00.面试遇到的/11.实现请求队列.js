//line=readline()
//print(line)
console.log('Hello World!');
function ajax(url, params) {
  return new Promise((resolve,reject)=>{
    
  })
}
function createRequest(obj) {
  let queen = [];
  let max = obj.poll || 5;
  return function(url, params) {
    return new Promise((resolve, reject)=>{
      const newajax = ()=>{
        ajax(url, params).then((data)=>{
          let fn = queen.shift();
          max++;
          if(fn && typeof fn === 'function') fn();
          resolve(data)
        }).catch((e)=> {
          reject(e)
        });
      }
      if(max === 0) {
        queen.push(()=>{
          try {
            newajax()
          }catch (e){
            reject(e)
          }
        })
        return
      }
      max--; // 发送了就减少一个
      newajax()
    });
  }
}