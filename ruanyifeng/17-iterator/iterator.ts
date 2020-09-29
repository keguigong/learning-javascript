/**
 * https://es6.ruanyifeng.com/#docs/iterator
 * Iterator 和 for...of 循环
 */

/**
 * 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 * 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 * 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 * 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 */

let it = makeIterator(['a', 'b']);

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: undefined, done: true }

  function makeIterator(array) {
    let nextIndex = 0;
    return {
      next: function () {
        return nextIndex < array.lenth ?
          { value: array[nextIndex++], done: false } :
          { value: undefined, done: true };
      }
    }
  }


/**
 * ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性.
 * 或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
 */
const iterableObj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};

/**
 * 原生具备 Iterator 接口的数据结构如下。
 * Array
 * Map
 * Set
 * String
 * TypedArray
 * 函数的 arguments 对象
 * NodeList 对象
 */
let iterableArr = ['a', 'b', 'c'];
let iter = iterableArr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());