_2022/12/28_

## 简答

- 如何搭建自己的脚手架，工程化相关经验
- 你是怎么理解`__proto__`和`prototype`的

  - [JavaScript 之彻底理解原型与原型链](https://juejin.cn/post/7018355953955241997)

- 如何拷贝函数
- 递归如何拷贝自己，例如如何对 obj 进行深层拷贝

  - [JavaScript系列： 手撕JS中的深浅拷贝](https://juejin.cn/post/6844904121577766919)
  - [分享 4 种 JS 深拷贝的方法](https://cloud.tencent.com/developer/article/2019581)

```ts
let obj = {
  a: "somestring",
  b: 12,
  e: obj,
  f: function (s) {},
};
```

- js 的执行机制，宏任务队列和微任务队列一次是执行一个还是一次执行多个
- nextTick 是在事件循环的什么时候执行的，什么时候可以使用到 nextTick

  - [Vue中的$nextTick有什么作用？](https://vue3js.cn/interview/vue/nexttick.html)

## 参考

- [原生 JS 灵魂之问, 请问你能接得住几个？(上)](https://juejin.cn/post/6844903974378668039)
