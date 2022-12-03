**References:**

- [https://juejin.cn/post/7072168887344693256](https://juejin.cn/post/7072168887344693256)

## 简答

- display 有那些值
- display 和 visibility 区别
- div 里面放 img，div 设置 display:none 和 visibility:hidden 对 img 的 src 加载有什么影响？
- vue2/3 数据劫持对比
- vue keep-alive 原理及属性,include 和 exclude 都写了同一个路由会怎样？
- 一段 vuex action 代码现场 code review（try-catch、默认返回值、promise）

## 上机

### Q1: 打印顺序

```js
const p = new Promise((resolve) => {
  console.log(0);
  resolve();
});
p.then((res) => {
  console.log(1);
})
  .then((res) => {
    console.log(2);
  })
  .then((res) => {
    console.log(3);
  });
p.then((res) => {
  console.log(4);
});
p.then((res) => {
  console.log(5);
});
p.then((res) => {
  console.log(6);
});

// 0 1 4 5 6 2 3
```

### Q2: 打印顺序

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
```

### Q3: 打印顺序

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 start");
  return new Promise((resolve, reject) => {
    resolve();
    console.log("async2 promise");
  });
}

console.log("illegalscript start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
})
  .then(function () {
    console.log("promise2");
  })
  .then(function () {
    console.log("promise3");
  });
console.log("illegalscript end");

/**
 * illegalscript start
 * async1 start
 * async2 start
 * async2 promise
 * promise1
 * illegalscript end
 * async1 end
 * promise2
 * setTimeout
 * promise3
 */
```

- Q4: 手写 eventEmitter
- Q5: 手写柯里化
- Q6: leetcode 22 括号生成
