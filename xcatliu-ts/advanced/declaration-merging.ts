/**
 * https://ts.xcatliu.com/advanced/declaration-merging
 * 声明合并
 */

/**
 * https://ts.xcatliu.com/advanced/declaration-merging#han-shu-de-he-bing
 * 函数的合并
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

/**
 * https://ts.xcatliu.com/advanced/declaration-merging#jie-kou-de-he-bing
 * 接口的合并
 */
interface AlarmB {
  price: number;
}

interface AlarmB {
  weight: number;
}

// 相当于
interface AlarmB {
  price: number;
  weight: number;
}
