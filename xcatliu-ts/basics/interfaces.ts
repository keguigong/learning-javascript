/**
 * https://ts.xcatliu.com/basics/type-of-object-interfaces
 * 对象的类型——接口
 */

interface Person1 {
  name: string;
  age: number;
}
let tom: Person1 = {
  name: 'Tom',
  age: 25
}

/**
 * https://ts.xcatliu.com/basics/type-of-object-interfaces#ke-xuan-shu-xing
 * 可选属性
 */
interface Person2 {
  name: string;
  age?: number;
}
let jack: Person2 = {
  name: 'Jack',
}

/**
 * https://ts.xcatliu.com/basics/type-of-object-interfaces#ren-yi-shu-xing
 * 任意属性
 */
interface Person3 {
  name: string;
  age?: number;
  [propName: string]: any
}
let eric: Person3 = {
  name: 'Eric',
  gender: 'male'
}

interface Person4 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}
let bob: Person4 = {
  name: 'Bob',
  gender: 'male'
}

/**
 * https://ts.xcatliu.com/basics/type-of-object-interfaces#zhi-du-shu-xing
 * 只读属性
 */
interface Person5 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
let flora: Person5 = {
  id: 89757,
  name: 'Flora',
  gender: 'female'
}
// flora.id = 123123