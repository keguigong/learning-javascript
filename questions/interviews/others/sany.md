_2023/3/10_

- Vue2 的 data 为什么要使用函数的形式

  - [Vue 组件 data 为什么必须是函数？](https://juejin.cn/post/6844903478901358605)

- Vue 的自定义指令有了解吗，如何使用

  - [自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html)

- Vue3 相较于 Vue2 的更新内容
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
