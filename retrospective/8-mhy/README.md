_2022/12/28_

## 简答

- 如何搭建自己的脚手架，工程化相关经验
- 你是怎么理解`__proto__`和`prototype`的
- 如何拷贝函数
- 递归如何拷贝自己，例如如何对obj进行深层拷贝

```ts
let obj = {
  a: "somestring",
  b: 12,
  e: obj,
  f: function(s) {}
};
```
