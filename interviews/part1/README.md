## 简答题

_2022/11/18_
- Webpack 优化策略，你进行了那些优化，达到了什么效果
- Qiankun 如何保证 JS 以及样式不污染，如何进行父子间通信
- 小程序的运行逻辑
- Vue响应式更新的原理
- Vue Router history和hash模式有什么区别? [vue开发多页面应用 - hash模式和history模式](https://zhuanlan.zhihu.com/p/46964708)
- DOM tree渲染过程
- 网页从输入url到最终加载完成做了那些事情? [从浏览器输入URL 到渲染完成，到底发生了什么？](https://www.jianshu.com/p/6ae4259f1c33)

## 上机题

### Q1 Event 订阅模型

```js
class Event {
  on(eventName, cb, ...args) {}

  off(eventName, cb) {}

  once(eventName, cb, ...args) {}

  trigger(eventName, ...args) {}
}

const event = new Event();
event.on("click", () => {
  console.log("clicked");
});
```

### Q2 控制任务执行顺序

实现一个同时只执行 2 个请求的函数，按照顺序添加进函数，然后按照顺序输出 2，1，3，4

```js
const request1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 400);
});

const request2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 300);
});

const request3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 800);
});

const request4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 500);
});

function scheduler(max) {
  // 你的代码
}

const schedule = scheduler(2);

schedule.addSchedule(request1).then(() => {
  console.log("1");
});

schedule.addSchedule(request2).then(() => {
  console.log("2");
});

schedule.addSchedule(request3).then(() => {
  console.log("3");
});

schedule.addSchedule(request4).then(() => {
  console.log("4");
});
```
