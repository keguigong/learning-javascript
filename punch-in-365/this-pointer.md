### `this`指针

**什么是 this**

this 就是 Javascript 提供的一个上下文环境。

在 javascript 当中每一个 function 都是一个对象，所以在这个里 var temp=this 指的是 function 当前的对象。this 是 Javascript 语言的一个关键字。它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。
在函数执行时，this 总是指向调用该函数的对象。要判断 this 的指向，其实就是判断 this 所在的函数属于谁。

**this 指向通用规则**

- 永远指向方法所归属对象
- 指向取决于调用位置

**References**:

- [Day18 - this 指向的多种形式](https://juejin.cn/post/7054525103098298404)
- [Day19 - React 与 this 指向](https://juejin.cn/post/7054949116295512077)
- [JS 中的 call、apply、bind 方法详解](https://www.cnblogs.com/moqiutao/p/7371988.html)
