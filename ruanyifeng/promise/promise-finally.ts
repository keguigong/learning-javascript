/**
 * https://es6.ruanyifeng.com/#docs/promise#Promise-prototype-finally
 * Promise.prototype.finally()
 */

promise
.finally(() => {
  // 语句
});

// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);