async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */

//   作者：一袋米要扛几楼
//   链接：https://juejin.cn/post/7072168887344693256
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
