/**
 * https://es6.ruanyifeng.com/#docs/promise#Promise-prototype-then
 * Promise.prototype.then()
 */

getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});

/**
 * https://es6.ruanyifeng.com/#docs/promise#Promise-prototype-catch
 * Promise.prototype.catch()
 */
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
/**
 * 一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
 */