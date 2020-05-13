/**
 * https://es6.ruanyifeng.com/#docs/symbol#Symbol-for%EF%BC%8CSymbol-keyFor
 */

let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

console.log(s1 === s2);

let s3 = Symbol('bar');
let s4 = Symbol('bar');

console.log(s3 === s4);

// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(s2));
console.log(Symbol.keyFor(s3));
console.log(Symbol.keyFor(s4));