let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if (num === 2) {
    //   reject('ERR_NUM_2');
    // }
    resolve({
      message: 'MSG_RESOLVED',
      // num
    });
  }, 200)
})

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(i);
}

Promise.all(arr.map(item => promise1))
  .then(res => console.log(res))
  .catch(err => console.log(err))