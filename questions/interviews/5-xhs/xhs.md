## 简答

_2022/12/06 xhs_

- SplitChunk首页面1M, 剩下的9个页面合计1M, 要求将这9个页面打包在一起如何配置？
- nextTick如何实现的?
- 有哪些JS沙箱隔离方法？
- nextjs如何控制那些在Server渲染？

## Q1 实现一个 Array 的 group 方法

```ts
/**
 * 实现一个Array的group方法，结果将根据回调函数自动归类到对应的类型
 * 如下调用group返回
 * { "even": [2, 4, 6], "odd": [1, 3, 5]}
 */

// your code here

const evenOrOdd = (item: number, index: number, arr: Array) => {
  return item % 2 === 0 ? "even" : "odd";
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.group(evenOrOdd));
```

## Q2 找出最长连续重复字符

```ts
/**
 * 给定一个字符串，找出其中连续重复次数最多的的字符以及重复的次数
 * 输入aabbbbcccddddddee
 * 输出{ string: "d", count: 6}
 */

function findString(str: string) {
  // your code here
}

let str = "aabbbbcccddddddee";
let res = findString(str);
console.log(res.string === "d" && res.count === 6)
// true
```
