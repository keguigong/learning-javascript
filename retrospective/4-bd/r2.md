## 项目经历

_2022/12/02 BD_

- qiankun 是如何实现隔离的，W3C 有提出什么方案来实现隔离吗
- 在编译时有什么优化 Webpack 速度的配置项？生产中又有什么优化项？
- 组件打包多个组件是怎么打包的，antd 是怎么实现按需引入的？
- 页面卡住是如何产生的，一个渲染周期是怎么样的？衡量首屏加载时间的 W3C 规范、帧率的测量工具以及工具是什么？
- BFF 从登录到完成的完整流程，请求登录的时候带着的 callback 是指向前端还是 BFF？

## Q1 并行的读取多个文件，并一起返回文件的行数

```js
function readLinesOfEachFile(filePaths: string[]): number[] {
  // your code here
}
```

## Q2 实现一个编码器

```js
/**
 * 实现一个编码器
 * 输入: 3[a4[b]]ef
 * 输出: abbbbabbbbabbbbef
 *
 * 输入: 2[ab]3[cd]
 * 输出: ababcdcd
 *
 * 输入不会有格式错误，不会出现3[ab, 2[3]等格式
 */

function encoder(s: string): string {
  // your code here
}
```
