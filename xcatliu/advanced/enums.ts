/**
 * https://ts.xcatliu.com/advanced/enum
 * 枚举
 */
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }

console.log(Days.Sun === 0); // true
console.log(Days.Mon === 1); // true
console.log(Days.Tue === 2); // true
console.log(Days.Sat === 6); // true

console.log(Days[0] === 'Sun'); // true
console.log(Days[1] === 'Mon'); // true
console.log(Days[2] === 'Tue'); // true
console.log(Days[6] === 'Sat'); // true

/**
 * https://ts.xcatliu.com/advanced/enum#chang-shu-xiang-he-ji-suan-suo-de-xiang
 * 常数项和计算所得项
 */
enum Color1 { Red, Green, Blue = 'blue'.length }
enum Color2 {Red = "red".length, Green, Blue};

/**
 * https://ts.xcatliu.com/advanced/enum#chang-shu-mei-ju
 * 常数枚举
 */
const enum Direc {
  Up,
  Down,
  Left,
  Right
}

const direc = [Direc.Up, Direc.Down, Direc.Left, Direc.Right];

/**
 * https://ts.xcatliu.com/advanced/enum#wai-bu-mei-ju
 * 外部枚举
 */
declare enum DDDD {
  Up,
  Down,
  Left,
  Right
}

const direct = [DDDD.Up, DDDD.Down, DDDD.Left, DDDD.Right];
