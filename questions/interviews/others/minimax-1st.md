_2023/1/31_

## 简答题

- 小程序 WebView 多平台开发有遇到什么问题？各个平台肯定存在一些差异
- 微信/飞书平台有不同的 feature 前端如何进行区别？Webpack 打包可不可以通过指定环境来区别？
- 简历中vue-router如何手动控制缓存
- 如何通过Webpack优化提升加载速度

## Q1 `compose`

实现 compose 函数，使其可以让中间件顺序执行，打印顺序 1，3，5，6，4，2

```js
const app = {};
app.middleware = [];
app.use = function (fn) {
  app.middleware.push(fn);
};

// app.compose = function () {};

app.compose = function () {
  let len = app.middleware.length;
  let index = 0;

  if (len) next();

  function next() {
    index += 1;
    if (index < len + 1) {
      return app.middleware[index - 1].call(null, next);
    } else {
      return;
    }
  }
};

app.use((next) => {
  console.log(1);
  next();
  console.log(2);
});
app.use((next) => {
  console.log(3);
  next();
  console.log(4);
});
app.use((next) => {
  console.log(5);
  next();
  console.log(6);
});

app.compose();
```

**References:**

- [函数式编程之Compose函数实现分析](https://juejin.cn/post/6844903988647690254)

## Q2 目标和

给你一个整数数组 nums 和一个整数 target 。
向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式

试例
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

```ts
function findTargetSumWays(nums: number[], target: number): number {
  let len = nums.length;
  let count = 0;
  let exprList = [];

  function calcSum(
    nums: number[],
    index: number,
    sum: number,
    expr = ""
  ) {
    if (index >= len) {
      if (sum === target) {
        count += 1;
        exprList.push(expr + `=${target}`);
      }
    } else {
      let _expr: string;
      _expr = expr + "+" + nums[index];
      calcSum(nums, index + 1, sum + nums[index], _expr);
      _expr = expr + "-" + nums[index];
      calcSum(nums, index + 1, sum - nums[index], _expr);
    }
  }
  calcSum(nums, 0, 0);
  console.log(exprList.join("\n"));
  return count;
}

let nums = [1, 1, 1, 1, 1];
let target = 3;
findTargetSumWays(nums, target);

// +1+1+1+1-1=3
// +1+1+1-1+1=3
// +1+1-1+1+1=3
// +1-1+1+1+1=3
// -1+1+1+1+1=3
```


**References:**

- [LeetCode 目标和](https://leetcode.cn/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/)
