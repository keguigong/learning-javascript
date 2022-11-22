const p = new Promise((resolve) => {
  console.log(0);
  resolve();
});
p.then((res) => {
  console.log(1);
})
  .then((res) => {
    console.log(2);
  })
  .then((res) => {
    console.log(3);
  });
p.then((res) => {
  console.log(4);
});
p.then((res) => {
  console.log(5);
});
p.then((res) => {
  console.log(6);
});

// 0 1 4 5 6 2 3

// 作者：一袋米要扛几楼
// 链接：https://juejin.cn/post/7072168887344693256
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
