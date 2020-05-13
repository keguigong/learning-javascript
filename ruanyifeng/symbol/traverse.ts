/**
 * https://es6.ruanyifeng.com/#docs/symbol#%E5%B1%9E%E6%80%A7%E5%90%8D%E7%9A%84%E9%81%8D%E5%8E%86
 */

const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(Object.keys(obj));
console.log(objectSymbols);