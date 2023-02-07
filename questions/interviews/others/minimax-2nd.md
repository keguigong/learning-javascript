_2023/2/7_

## 简答题

- 使用小程序带来了哪些收益，解决了哪些痛点
- 物联网平台的出发点以及产生价值

## Q1 BigNumber 加法器

实现一个 BigNumber 加法器，使用字符串的形式保存大数，结果用字符串的形式表示。

```ts
function plusBigNumber(num1: string, num2: string): string {
  let result = "";
  const len = Math.max(num1.length, num2.length);

  if (num1.length > num2.length) result = plus.call(this, num1, num2, len);
  else result = plus.call(this, num2, num1, len);

  return result;
}

function plus(num1: string, num2: string, len: number): string {
  let result = "";
  const offset = num1.length - num2.length;
  let index = len - 1;
  let plusOne = 0;

  for (let i = 0; i < offset; i++) {
    num2 = 0 + num2;
  }

  while (index >= 0) {
    let n1 = parseInt(num1[index]);
    let n2 = parseInt(num2[index]);
    let calc = n1 + n2 + plusOne;

    result = (calc % 10) + result;
    plusOne = calc >= 10 ? 1 : 0;
    index--;
  }

  if (plusOne) result = 1 + result;
  return result;
}

(function () {
  let num1 = "1";
  let num2 = "999";
  console.log(plusBigNumber(num1, num2));
})();
```
