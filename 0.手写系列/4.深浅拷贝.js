// 实现Objec.assign();
(function () {
  if (typeof Object.assign2 !== 'function') {
    Object.defineProperty(Object, 'assign2', {
      value: function (target) {
        if (target == null) throw new TypeError('Canot null')
        
        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index]
          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey]
              }
            }
          }
        }
        return to
      },
      writable: true,
      configurable: true
    })
  }
})()

// 实现深拷贝 递归实现  Object.prototype.hasOwnProperty.call  因为source 可能不是对象
// 第一版本
function deepClone(source) {
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
         target[key] = deepClone(source[key])
      } else {
        target[key] = source[key];
       }
    }
  }
  return target;
}


function isObject(obj) {
	return typeof obj === 'object' && obj != null;
}
// 添加数组
function deepClone2(source) {
  if (!isObject(source)) return source; // 不是 对象返回本身
  
  var target = Array.isArray(source) ? [] : {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone2(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target
}

// !! 解决循环引用
// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

function deepClone3(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 查哈希表  存在直接返回

  var target = Array.isArray(source) ? [] : {};
  hash.set(source, target); // 哈希表设值

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone3(source[key], hash);// 透传hash
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// !!! 拷贝 Symbol  Reflect.ownKeys
// Symbol 在 ES6 下才有，我们需要一些方法来检测出 Symble 类型。
// 方法一：Object.getOwnPropertySymbols(...)
// 方法二：Reflect.ownKeys(...)
function deepClone4(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 查哈希表  存在直接返回

  var target = Array.isArray(source) ? [] : [];
  hash.set(source, target); // 哈希表设值
  // ============= 新增代码
  let symKeys = Object.getOwnPropertySymbols(source); // 查找
  if (symKeys.length) { // 查找成功	
      symKeys.forEach(symKey => {
          if (isObject(source[symKey])) {
              target[symKey] = cloneDeep4(source[symKey], hash); 
          } else {
              target[symKey] = source[symKey];
          }    
      });
  }
  // =============
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone3(source[key], hash);// 透传hash
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function deepClone5(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 查哈希表  存在直接返回

  var target = Array.isArray(source) ? [] : [];
  hash.set(source, target); // 哈希表设值

  Reflect.ownKeys(source).forEach(key => {
    if (isObject(source[key])) {
      target[key] = deepClone5(source[key], hash)
    } else {
      target[key] = source[key];
    }
  })
  return target;
}

// 防止 爆栈
function cloneDeep5(x) {
  const root = {};

  // 栈
  const loopList = [
      {
          parent: root,
          key: undefined,
          data: x,
      }
  ];

  while(loopList.length) {
      // 广度优先
      const node = loopList.pop();
      const parent = node.parent;
      const key = node.key;
      const data = node.data;

      // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
      let res = parent;
      if (typeof key !== 'undefined') {
          res = parent[key] = {};
      }

      for(let k in data) {
          if (data.hasOwnProperty(k)) {
              if (typeof data[k] === 'object') {
                  // 下一次循环
                  loopList.push({
                      parent: res,
                      key: k,
                      data: data[k],
                  });
              } else {
                  res[k] = data[k];
              }
          }
      }
  }

  return root;
}


function cloneDeep(obj, map = new WeakMap()) {
  if (!obj instanceof Object) return obj; // 基本数据
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  
  if (map.get(obj)) return map.get(obj); // 解决循环引用
  
  if (obj instanceof Function) { // 解决函数
    return function () {
      return obj.apply(this, [...arguments]);
    };
  }
  
  const res = new obj.constructor(); // 下面是数组/普通对象/Set/Map 的处理
  
  obj instanceof Object && map.set(obj, res);
  if (obj instanceof Map) {
    obj.forEach((item, index) => {
      res.set(cloneDeep(index, map), cloneDeep(item, map));
    });
  }
  if (obj instanceof Set) {
    obj.forEach((item) => {
      res.add(cloneDeep(item, map));
    });
  }
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = cloneDeep(obj[key], map);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
}

const map = new Map();
map.set({ a: 1 }, "1");
const source = {
  name: "Jack",
  meta: {
    age: 12,
    birth: new Date("1997-10-10"),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log("Hello");
    },
    map
  },
};
source.source = source;
const newObj = cloneDeep(source);
console.log(newObj.meta.ary[2] === source.meta.ary[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false
console.log(newObj);
