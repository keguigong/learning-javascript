_2023/3/10_

- Vue2 的 data 为什么要使用函数的形式

  - [Vue 组件 data 为什么必须是函数？](https://juejin.cn/post/6844903478901358605)
  - [为什么在 vue 的组件中，data 要用 function 返回对象呢？](https://blog.csdn.net/shaleilei/article/details/78084171)

- Vue 的自定义指令有了解吗，如何使用

  - [自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html)

- Vue3 相较于 Vue2 的更新内容

  - [谈谈 vue3.0 要更新的内容相关笔记](https://juejin.cn/post/6844904096021872648)

- 完成一个同步以及异步的斐波那契数列的相关函数

```js
function addSync(a, b) {
  return a + b
}

function addAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b)
    }, Math.random() * 100)
  })
}

// 求斐波那契数某一位的值，1 1 2 3 5 8 13 21...
// f(1) = 1
// f(2) = 1
// f(3) = f(2) + f(1)
// f(n) = f(n-2) + f(n-1)
async function fibonacci(n) {
  const dp = []
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    // sync
    // dp[i] = addSync(dp[i - 1], dp[i - 2])
    dp[i] = await addAsync(dp[i - 1], dp[i - 2])
  }

  return dp[n]
}

fibonacci(131).then((res) => console.log(res))
```

- qiankun 父子应用都适用 elementui 如何解决版本冲突？如何共用资源加载？
- qiankun 父应用针对 elementui 样式的修改如何让其不影响子应用
- http 各版本的更新内容

  - [Http 协议不同版本的区别](https://developer.aliyun.com/article/888690)
  - [HTTP 3 规范正式发布](https://juejin.cn/post/7108562495396118541)

- echarts 加载百万级别数据如何优化

_2023/3/13_

- 浏览器能同时发起的最多请求数量

  - [chrome 浏览器并发请求数](https://juejin.cn/post/7102298393271074853)

- http code 301/302/303/304 各自的含义

  - [http 301、302、304、400、405、415 状态码解释](https://blog.csdn.net/wangjun5159/article/details/51239960)
