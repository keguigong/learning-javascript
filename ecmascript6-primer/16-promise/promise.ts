/**
 * https://es6.ruanyifeng.com/#docs/promise
 * Promise对象
 */

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

/**
 * Promise 新建后就会立即执行，所以首先输出的是Promise。
 * 然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。
 * 所以resolved最后输出。
 */
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

/**
 * 一个用Promise对象实现的 Ajax 操作的例子。
 * @param url 
 */
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("https://api.tvmaze.com/search/shows?q=batman").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});

/**
 * 上面代码中，p1是一个 Promise，3 秒之后变为rejected。
 * p2的状态在 1 秒之后改变，resolve方法返回的是p1。
 * 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
 * 所以，后面的then语句都变成针对后者（p1）。
 * 又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
 */
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))