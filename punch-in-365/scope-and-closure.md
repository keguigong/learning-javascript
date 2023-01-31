### 作用域以及闭包

闭包的定义：

- 《你不知道的 javaScript》对于闭包是这么定义的：函数创建和函数执行不在同一个作用域下就会形成闭包。
- MDN 对于闭包的定义为：闭包是指那些能够访问自由变量的函数。
- 《JS 高级程序设计-第 3 版》对于闭包的定义: 闭包是指有权访问另外一个函数作用域中的变量的函数

**References:**

- [Day08 - 什么是闭包？如何制造闭包？](https://juejin.cn/post/7050861660000976904)
- [Day14 - 词法作用域、块级作用域、作用域链、静态动态作用域](https://juejin.cn/post/7053087344827744292)
- [Day15 - let为什么可以解决循环陷阱](https://juejin.cn/post/7053475694730280997)
- [Day17 - let是否会造成变量提升](https://juejin.cn/post/7054194651380580389)

- [彻底理解 js 闭包](https://juejin.cn/post/6844903470839906311)
- [我从来不理解 JavaScript 闭包，直到有人这样向我解释它](https://juejin.cn/post/6844903858636849159)
- [JS 闭包经典使用场景和含闭包必刷题](https://juejin.cn/post/6937469222251560990)

### 惰性函数

惰性函数表示函数执行的分支只会在函数第一次调用的时候执行，在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，这样任何对原函数的调用就不用再经过执行的分支了。

**References:**

- [Day09 - 闭包应用1 - 制造惰性函数](https://juejin.cn/post/7051233635608821797)

### 柯里化

柯里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。也就是将一个 n 元函数转换成 n 个一元函数。

```ts
function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len);
}

function _curry(fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params];
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args);
    }
  };
}
```

**References:**

- [Day10-闭包应用-偏应用函数与柯里化](https://juejin.cn/post/7051547767855906852)
- [详解 JS 函数柯里化](https://www.jianshu.com/p/2975c25e4d71)
- [「前端进阶」彻底弄懂函数柯里化](https://juejin.cn/post/6844903882208837645)
