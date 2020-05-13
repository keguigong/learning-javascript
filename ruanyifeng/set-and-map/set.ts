/**
 * https://es6.ruanyifeng.com/#docs/set-map#Set
 */

const set = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => set.add(x));

for (let i of set) {
  console.log(i);
}

console.log(set, [...set], set.has(2), set.keys());

// 数组的map和filter方法也可以间接用于 Set 了。
let set1 = new Set([1, 2, 3]);
set1 = new Set([...set1].map(x => x * 2));

/**
 * https://es6.ruanyifeng.com/#docs/set-map#WeakSet
 */

// 注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。
const arr = [[1, 2], [3, 4]];
const ws = new WeakSet(arr);
// WeakSet {[1, 2], [3, 4]}