/**
 * Async Await
 */
console.log("start");

async function a1() {
  console.log("1");
  await a2();
  console.log("2");
}

async function a2() {
  console.log("3");
}

a1();

Promise.resolve()
  .then(Promise.resolve(6))
  .then((res) => {
    setTimeout(() => {
      console.log("4");
    });
    console.log("5");
    return res;
  })
  .then((res) => console.log(res));

console.log("end");

/**
 *
 */
setTimeout(function timeout() {
  console.log("timeout");
}, 0);

setImmediate(function immediate() {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("nextTick");
});
