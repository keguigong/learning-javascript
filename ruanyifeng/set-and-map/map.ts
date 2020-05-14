/**
 * https://es6.ruanyifeng.com/#docs/set-map#Map
 * Map
 */

const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

/**
 * 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
 * 也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
 * 如果你需要“键值对”的数据结构，Map 比 Object 更合适。
 */

/**
 * 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
 */
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

console.log(map.size)
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

/**
 * Map 结构原生提供三个遍历器生成函数和一个遍历方法。
 * Map.prototype.keys()：返回键名的遍历器。
 * Map.prototype.values()：返回键值的遍历器。
 * Map.prototype.entries()：返回所有成员的遍历器。
 * Map.prototype.forEach()：遍历 Map 的所有成员。
 */

const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"