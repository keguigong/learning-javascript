//
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
function testAnimal(animal: Animal) {
  // return (animal as Cat);
}
function testCat(cat: Cat) {
  // return (cat as Animal);
}
// 类型断言不是类型转换，它不会真的影响到变量的类型。
function toBoolean(something: any): boolean {
  return something as boolean;
}
toBoolean(1);
// 返回值为 1
//
function toRealBoolean(something: any): boolean {
  return Boolean(something);
}
toRealBoolean(1);
// 返回值为 true