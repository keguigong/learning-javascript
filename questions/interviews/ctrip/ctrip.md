_2023/3/15_

- graphql 有了解，解决了哪些问题
- 代码测试工具以及开测比是多少
- react native 通信方式是什么（提示是 JSON 形式的）
- react hooks 和 class 有什么区别
- 前端性能优化的方式（加载，缓存以及页面操作）
- 前端性能评定指标（携程 WiFi Web 端为 1.2s），有哪些性能评定指标
- 写一个 watcher

```js
const reactive = (obj) => {
  // your code here
}

const rawData = {
  a: 1,
  b: 2,
  c: {
    c1: {
      af: 999
    },
    c2: 4
  }
}

const data = reactive(rawData)
console.log(data)

data.a = 5 // SET key=a val=5
data.b = 7 // SET key=b val=7
data.c.c2 = 4 //
data.c.c1.af = 121 //SET key=af val=121

console.log(data)
```
