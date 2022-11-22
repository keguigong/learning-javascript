/**
 * https://ts.xcatliu.com/basics/type-of-function
 * 函数的类型
 */
function sum1(x: number, y: number): number {
  return x + y;
}

/**
 * https://ts.xcatliu.com/basics/type-of-function#han-shu-biao-da-shi
 * 函数表达式
 */
const mySum = function (x: number, y: number): number {
  return x + y;
};
/**
 * 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
 * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 */
const yourSum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

/**
 * https://ts.xcatliu.com/basics/type-of-function#yong-jie-kou-ding-yi-han-shu-de-xing-zhuang
 * 用接口定义函数的形状
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

/**
 * https://ts.xcatliu.com/basics/type-of-function#ke-xuan-can-shu
 * 可选参数
 */
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}
const tomcat = buildName('Tom', 'Cat');
const ttom = buildName('Tom');

/**
 * https://ts.xcatliu.com/basics/type-of-function#sheng-yu-can-shu
 * 剩余参数
 */
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item);
  });
}
const a = [];
push(a, 1, 2, 3);

/**
 * https://ts.xcatliu.com/basics/type-of-function#zhong-zai
 * 重载
 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
