// 简单的例子
function createArray(length: number, value: any): Array<any> {
  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

// 这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：
// Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。

function createArrayA<T>(length: number, value: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArrayA<string>(3, 'x'); // ['x', 'x', 'x']
createArrayA(3, 'x'); // ['x', 'x', 'x']

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const swapRes = swap([7, 'seven']); // ['seven', 7]

// 泛型接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let yourSearch: SearchFunc;
yourSearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 当然也可以使用含有泛型的接口来定义函数的形状
interface CreateArrayBFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArrayB: CreateArrayBFunc;
createArrayB = function <T>(length: number, value: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArrayB(3, 'x'); // ['x', 'x', 'x']

function createArrayC<T = string>(length: number, value: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}
// 泛型函数的类型
let myIdentity: <T>(arg: T) => T = identity;
// 非泛型函数的类型
let nonGeneric: (arg: any) => any;
// 带有调用签名的对象字面量来定义泛型函数
let myIdentityA: {<T>(arg: T): T} = identity;

// 泛型接口
interface GenericIdentityFn<T> {
  <T>(arg: T) : T; 
}
function identityB<T>(arg: T): T {
  return arg;
}
let myIdentityB: GenericIdentityFn<number> = identity;

// 泛型类
// 除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = '';
myGenericNumber.add = function (x, y) { return x + y; };

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 'test'));

// 泛型约束
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);
  return arg;
}
// 上例中，泛型 T 不一定包含属性 length，所以编译的时候报错了。
// 我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface Lendthwise {
  length: number;
}

function loggingIdentityA<T extends Lendthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(7);

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (const id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(C: new () => A): A {
  return new C();
}

console.log(createInstance(Lion).keeper.nametag);  // typechecks!
console.log(createInstance(Bee).keeper.hasMask);   // typechecks!