/**
 * 深入理解NodeJS事件循环机制
 * https://juejin.cn/post/6844903999506923528
 */
setTimeout(() => {
  console.log("timeout0");
  new Promise((resolve, reject) => {
    resolve("resolved");
  }).then((res) => console.log(res));
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("timeout resolved");
    });
  }).then((res) => console.log(res));
  process.nextTick(() => {
    console.log("nextTick1");
    process.nextTick(() => {
      console.log("nextTick2");
    });
  });
  process.nextTick(() => {
    console.log("nextTick3");
  });
  console.log("sync");
  setTimeout(() => {
    console.log("timeout2");
  }, 0);
}, 0);
