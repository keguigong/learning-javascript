_2023/3/6_

## 简答

- 使用qiankun遇到的问题，有对比其他微前端框架吗
- nodejs捕获异常能说出几种方式（提示：除了trycatch，还有window.onError之类的）
- vue3 reactive和ref有什么区别
- composition api有什么优势

  - [组合式API和选项式API](https://juejin.cn/post/6985493062432587813)

- 使用过lodash吗，有了解过vueuse吗
- 有了解过低代码平台吗，有哪些优势以及劣势
- this的指向问题

```js
var name = "Hello world!"

function fn() {
  console.log(this.name);
}

const obj = {
  name: "Say goodbye.",
  method: function (fn) {
    fn()
    arguments[0]()
  }
}

obj.method(fn, 1)
```

- 尽量使用ES6和ts的语法实现如下转换

```js
var data = [
  { key: "property1", value: "value1" },
  { key: "property2", value: 2 },
  { key: "property3, value: "value3" },
]

var obj = {
  property1: "value1",
  property2: 2,
  property3: "value3"
}
```

- 实现一个fib函数，返回第n个fib数前面的所有数组

```ts
const fib = (n: number): number[] => {
  const dp: number[] = []
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return n > 0 ? dp.slice(0, n - 1) : []
}
```
