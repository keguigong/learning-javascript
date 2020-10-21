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

var iter = makeIterator(['a', 'b']);

console.log(iter.next()); // { value: "a", done: false }
console.log(iter.next()); // { value: "b", done: false }
console.log(iter.next()); // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
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
  [Symbol.iterator]: function () {
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

const iter1 = iterableObj[Symbol.iterator]();
console.log(iter1.next());

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
let iter2 = iterableArr[Symbol.iterator]();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

/**
 * 一个对象如果要具备可被for...of循环调用的 Iterator 接口，
 * 就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）。
 */
// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }

//   [Symbol.iterator]() { return this; }

//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {done: false, value: value};
//     }
//     return {done: true, value: undefined};
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }

// for (var value of range(0, 3)) {
//   console.log(value); // 0, 1, 2
// }

/**
 * 对于类似数组的对象（存在数值键名和length属性），部署 Iterator 接口，
 * 有一个简便方法，就是Symbol.iterator方法直接引用数组的 Iterator 接口。
 * 下面是另一个类似数组的对象调用数组的Symbol.iterator方法的例子。
 */
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}