/**
 * https://es6.ruanyifeng.com/#docs/promise#Promise-all
 * Promise.all()
 */

let promise1 = (num: number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    // if (num === 2) {
    //   reject(new Error('ERR_NUM_2'));
    // }
    resolve({
      message: 'MSG_RESOLVED',
      num
    });
  }, 200)
})

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(i);
}

Promise.all(arr.map(item => promise1(item)))
  .then(res => console.log('Promise.all()\n', res))
  .catch(err => console.log(err))

/**
 * https://juejin.im/post/5b2a422bf265da59810b677c#heading-14
 * 封装一个promise.all方法
 */

const promiseAll = (arr) => {
  let num = 0;
  let resultArr = [];
  let arrLength = arr.length;
  return new Promise((resolve, reject) => {
    arr.forEach(promise => {
      promise.then(res => {
        resultArr.push(res);
        if (num >= arrLength - 1) {
          resolve(resultArr);
        } else {
          num++;
        }
      }, err => reject(err))
    });
  })
}

promiseAll(arr.map(item => promise1(item))).then(res => console.log('promiseAll\n', res));