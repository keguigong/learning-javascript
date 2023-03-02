console.log("start");

setTimeout(() => {
  console.log("0");
  Promise.resolve()
    .then(() => {
      console.log("aaa");
      Promise.resolve();
    })
    .then(() => console.log("bbb"));
});

setTimeout(() => {
  console.log("0.5");
});

console.log("end");
