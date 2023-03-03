/**
 * 打印顺序
 */

console.log("A");
async function async1() {
  await async2();
  console.log("B");
}
async function async2() {
  console.log("C");
}
setTimeout(function () {
  console.log("D");
}, 0);
async1();
new Promise<void>((resolve) => {
  setTimeout(function () {
    console.log("F");
  }, 0);
  console.log("E");
  resolve();
})
  .then(function () {
    console.log("G");
  })
  .then(function () {
    console.log("H");
  });
console.log("I");

// A C E I B G H D F
