const jsonp = ({ url, params, callbackName }) => {
  const generateURL = () => {
    let dataSrc = '';
    for (let key in params) {
      dataSrc += `${key}=${params[key]}&`;
    }
    dataSrc += `callback=${callbackName}`
    return `${url}?${dataSrc}`
  }
  return new Promise((resolve, reject) => {
    callbackName = callbackName || Math.random().toString()
    let scriptEle = document.createElement('script');
    scriptEle.src = generateURL();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.body.removeChild(scriptEle); // 清除dom
    }
  })
}