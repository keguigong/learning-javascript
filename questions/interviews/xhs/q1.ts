/**
 * 实现一个Array的group方法，结果将根据回调函数自动归类到对应的类型
 * 如下调用group返回
 * { "even": [2, 4, 6], "odd": [1, 3, 5]}
 */

// @ts-nocheck
Array.prototype.group = function (
  callback: (item: number, index: number, arr: Array) => string
) {
  let obj = {};
  this.forEach((item: number, index: number) => {
    let res = callback.call(null, item, index, this);
    if (obj[res] instanceof Array) {
      obj[res].push(item);
    } else {
      obj[res] = [item];
    }
  });
  return obj;
};

const evenOrOdd = (item: number, index: number, arr: Array) => {
  return item % 2 === 0 ? "even" : "odd";
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.group(evenOrOdd));
