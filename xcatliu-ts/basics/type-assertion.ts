/**
 * https://ts.xcatliu.com/basics/type-assertion
 * 类型断言
 */

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

function testAnimal(animal: Animal) {
  return (animal as Cat);
}
/**
 * https://ts.xcatliu.com/basics/type-assertion#jiang-yi-ge-fu-lei-duan-yan-wei-geng-jia-ju-ti-de-zi-lei
 * 将一个父类断言为更加具体的子类
 */
function testCat(cat: Cat) {
  return (cat as Animal);
}

/**
 * https://ts.xcatliu.com/basics/type-assertion#lei-xing-duan-yan-vs-lei-xing-zhuan-huan
 * 类型断言 vs 类型转换
 * 类型断言不是类型转换，它不会真的影响到变量的类型。
 */
function toBoolean(something: any): boolean {
  return something as boolean;
}
toBoolean(1);
// 返回值为 1

function toRealBoolean(something: any): boolean {
  return Boolean(something);
}
toRealBoolean(1);
// 返回值为 true