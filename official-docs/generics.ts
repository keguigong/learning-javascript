/**
 * https://www.tslang.cn/docs/handbook/generics.html
 * 泛型
 */

export function identity<T>(arg: T): T {
  return arg;
}

/**
 * ts中箭头函数用泛型表示,6种方法
 * https://blog.csdn.net/weixin_45389051/article/details/118250554
 */
const foo: <T>(x: T) => T = (x) => x;

const foo1 = <T>(x: T): T => x;
