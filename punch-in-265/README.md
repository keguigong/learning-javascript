## 365 天打卡记录

### 整数表示

JavaScript 内部，所有数字都是以 64 位浮点数形式储存，即使整数也是如此。所以，1 与 1.0 是相同的，是同一个数。

```js
Math.pow(2, 53) - 1; // 最大
Number.MAX_SAFE_INTEGER - // 常数表示
  (Math.pow(2, 53) - 1); // 最大
Number.MIN_SAFE_INTEGER; // 常数表示
```

0.10 (二进制) 可以表示为 `1.00 * 2^-1`
0.01 (二进制) 可以表示为 `1.00 * 2^-2`

**References:**

- [Day01 JS 整数是怎么表示的](https://juejin.cn/post/7048191028280426526)
- [JavaScript 中的数字存储](https://fengmumu1.github.io/2018/06/30/js-number/)

### Day02 - 0.1 + 0.2 === 0.3

随着使用二进制位数的增加精度会越来越高，但是譬如五分之一 十分之一是永远无法表示的。

```js
(0.75).toString(2); // '0.11'
```

**References:**

- [Day02 - 0.1 + 0.2 === 0.3 嘛](https://juejin.cn/post/7048554678858022925)
