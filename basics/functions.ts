function sum1(x: number, y: number): number {
  return x + y;
}
//
const mySum = function (x: number, y: number): number {
  return x + y;
};
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
const yourSum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
//
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
//
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}
const tomcat = buildName('Tom', 'Cat');
const ttom = buildName('Tom');
//
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item);
  });
}
const a = [];
push(a, 1, 2, 3);
//
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
