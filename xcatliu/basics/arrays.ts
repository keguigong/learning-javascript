/**
 * https://ts.xcatliu.com/basics/type-of-array
 * 数组的类型
 */

let fibonacci: number[] = [1, 2, 3, 5]
fibonacci.push(9)

/**
 * https://ts.xcatliu.com/basics/type-of-array#shu-zu-fan-xing
 * 数组泛型
 */
let anArray: Array<number> = [1, 2, 3, 4];

/**
 * https://ts.xcatliu.com/basics/type-of-array#yong-jie-kou-biao-shi-shu-zu
 * 用接口表示数组
 */
interface NumberArray {
  [index: number]: number;
}
let aaaa: NumberArray = [1, 1, 2, 3, 5];

/**
 * https://ts.xcatliu.com/basics/type-of-array#lei-shu-zu
 * 类数组
 */
function sum2() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

/**
 * https://ts.xcatliu.com/basics/type-of-array#any-zai-shu-zu-zhong-de-ying-yong
 * any 在数组中的应用
 */
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
