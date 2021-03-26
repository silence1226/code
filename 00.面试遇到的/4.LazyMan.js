
// 设计一个LazyMan类，实现以下功能
LazyMan('Tony')
// Hi I am Tony
LazyMan('Tony').sleep(10).eat('lunch')
// Hi I am Tony
// 等待10秒...
// I am eating lunch
LazyMan('Tony').eat('lunch').sleep(10).eat('dinner')
// Hi I am Tony
// I am eating lunch
// 等待10秒...
// I am eating dinner
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food')
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待10秒
// I am eating junk food
class LazyManClass {
  // 构造函数
  constructor(name){
    this.name = name
    // 定义一个数组存放执行队列
    this.queue = []
    console.log(`Hi I am ${name}`)
    // 在调用LazyManClass时首先会打印 Hi I am ${name}
    setTimeout(() => {
      this.next()
    }, 0)

  }
  //  定义原型方法
  eat (food) {
    var fn = () => {
      console.log(`I am eating ${food}`)
      this.next()
    }
    this.queue.push(fn)
    return this
  }
  sleep (time) {
    var fn = () => {
      // 等待了10秒...
      setTimeout(() => {
        console.log(`等待了${time}秒`)
        this.next()
      }, 1000*time)
    }
    this.queue.push(fn)
    return this
  }
  sleepFirst (time) {
    var fn = () => {
      // 等待了5秒...
      setTimeout(() => {
        console.log(`等待了${time}秒`)
        this.next()
      }, 1000*time)
    }
    this.queue.unshift(fn)
    return this
  }
  next () {
    var fn = this.queue.shift()
    fn && fn()
  }
}
function LazyMan (name) {
  return new LazyManClass(name)
}
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food')
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待10秒
// I am eating junk food