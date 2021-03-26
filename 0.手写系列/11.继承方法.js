// 组合继承
function Parent() {
  this.favorite = 'money'
  this.getMoney = function(){
    return this.favorite;
  }
}
Parent.getParent = function () {
  console.log('我是静态方法');
}
Parent.prototype.setMoney = function (money) {
  this.favorite = money
}

function Child() {
  Parent.call(this)
  this.age = 18;
}
Child.prototype = Object.create(Parent.prototype);
Object.setPrototypeOf(Child, Parent) // !!!继承父类得静态方法
Child.prototype.constructor = Child;

let child = new Child();
console.log('child: ', child.__proto__);
Child.getParent()

console.log('child: ', child);
child.getMoney()
console.log('child.getMonet(): ', child.getMoney());
child.setMoney('dog')
console.log('child.getMonet(): ', child.getMoney());