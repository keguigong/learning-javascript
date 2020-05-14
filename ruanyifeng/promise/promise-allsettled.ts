/**
 * https://es6.ruanyifeng.com/#docs/promise#Promise-allSettled
 * Promise.allSettled()
 */

 /**
  * 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
  * 只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
  * 该方法由 ES2020 引入。
  */
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();
