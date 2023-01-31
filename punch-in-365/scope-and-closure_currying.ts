/**
 * 如何封装柯里化工具函数
 * https://juejin.cn/post/6844903882208837645#heading-3
 */

function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len);
}

function _curry(fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params];
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args);
    }
  };
}

// function curry1(fn, len = fn.length, ...args) {
//   return function (...params) {
//     let _args = [...args, ...params]
//     if (_args.length >= len) {
//       return fn.apply(this, _args)
//     } else {
//       return curry1.call(this, fn, len, ..._args)
//     }
//   };
// }

const add = (a, b, c, d, e) => {
  console.log(a, b, c, d, e);
};
let fn = curry(add);

fn(1, 2, 3, 4, 5);
fn(1)(2)(3)(4)(5);
fn(1, 2)(3)(4, 5);
