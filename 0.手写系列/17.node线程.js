// 一个简单带有cluster自动重启的app.js
const cluster = require('cluster');
const cpuNums = require('os').cpus().length;
const http = require('http');

if(cluster.isMaster){ // 是否在主线程
  for(var i = 0; i < cpuNums; i++){
    cluster.fork(); // 有多少个cpu就分多少个cluster出来

    cluster.on('exit', function(worker, code, signal) {
        console.log(`线程id为 ${worker.process.pid} 退出`);
    });
    cluster.on('listening', function(worker, code, signal) {
        console.log(`线程id为 ${worker.process.pid} 开始服务`);
    });
    cluster.on('disconnect', function(worker, code, signal) {
        console.log(`线程id为 ${worker.process.pid} 停止服务`);
    });
    process.on('SIGUSR2', function () { // 接收kill -SIGUSR2 $pid
      // 保存旧 worker 的列表，cluster.workers 是个 map
      var oldWorkers = Object.keys(cluster.workers).map(function (idx) {
          return cluster.workers[idx];
      });
      // 重新起服务
      cluster.fork();

      // 当新服务起起来之后，关闭所有的旧 worker
      cluster.once('listening', function (worker) {
        oldWorkers.forEach(function (worker) {
            // disconnect 会停止接收新请求，等待旧请求结束后再结束进程
            worker.disconnect();
        });
      });
    });
  }
}else{
  http.createServer(function(req, res){
    res.end(123);
  }).listen(8080);

  console.log(`你的线程id为 ${process.pid}`);
}