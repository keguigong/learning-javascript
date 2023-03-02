_2023/3/1_

## 一面

- 箭头函数的泛型怎么写

```ts
const foo: <T>(x: T) => T = (x) => x;

const foo1 = <T>(x: T): T => x;
```

- 数组里保存有一串点的坐标，再坐标中逐一连线形成折线，求折线长度的中点的坐标。（提示，使用向量的概念去解决）

## 二面

- 选用 nextjs 框架的原因
- 优化加载速度有性能指标吗，一开始是多少，后面是多少，12s 是不是太长了，有没有考虑过在后端优化而不是前端。
- 使用 drawLine 方法在 canvas 中绘制一段从[x1, y1]到[x2, y2]的虚线，dash 的长度为 1。

```ts
// 使用这个方法
const drawLine: (x1: number, y1: number, x2: number, y2: number) => void;

const drawDashedLine(x1: number, y1: number, x2: number, y2: number) {
  // 在此处编写
}
```
