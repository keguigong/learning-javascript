### `new`一个函数发生了什么

```js
// TODO: 构造函数被执行
function Person(name) {
  console.log("constructor"); // TODO: 将构造函数的this指向新对象
  this.name = name;
}
// TODO: 将新建对象的__proto__属性设置为构造函数的prototype
Person.prototype.say = function () {
  console.log("My name is", this.name);
};
// TODO: 创建新对象
const b = new Person("b");
b.say();
```

通过函数模拟`new`的过程

```js
function myNew(fn, ...args) {
  // 创建一个空对象
  const obj = {};
  // 将该对象的 __proto__ 属性链接到构造函数原型对象
  obj.__proto__ = fn.prototype;
  // 将该对象作为 this 上下文调用构造函数并接收返回值
  const res = fn.apply(obj, args);
  // 如果返回值存在并且是引用数据类型，返回构造函数返回值，否则返回创建的对象
  return typeof res === "object" ? res : obj;
}
const c = myNew(Person, "b");
c.say(); 
```

**References:**

- [Day05 - new 一个函数发生了什么？](https://juejin.cn/post/7049731312801808420)
- [彻底理解 JavaScript 原型链（一）__proto__的默认指向](https://www.jianshu.com/p/686b61c4a43d)
- [帮你彻底搞懂 JS 中的 prototype、__proto__与 constructor](https://blog.csdn.net/cc18868876837/article/details/81211729)

- [ES6 之那些年我们都迷茫的原型和类（上）](https://juejin.cn/post/6844903933832347662)
- [ES6 之那些年我们都迷茫的原型和类（下）](https://juejin.cn/post/6844903934344036365)
