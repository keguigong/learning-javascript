/**
 * https://es6.ruanyifeng.com/#docs/promise#Promise-any
 * Promise.any()
 */

/**
 * 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
 * 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；
 * 如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。该方法目前是一个第三阶段的提案 。
 * Promise.any()跟Promise.race()方法很像，只有一点不同，就是不会因为某个 Promise 变成rejected状态而结束。
 */
const promises = [
  fetch('/endpoint-a').then(() => 'a'),
  fetch('/endpoint-b').then(() => 'b'),
  fetch('/endpoint-c').then(() => 'c'),
];
try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}