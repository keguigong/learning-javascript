/**
 * for...of循环
 * https://es6.ruanyifeng.com/#docs/generator#for---of-%E5%BE%AA%E7%8E%AF
 */
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}

/**
 * 利用for...of循环，可以写出遍历任意对象（object）的方法。
 * 原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，
 * 通过 Generator 函数为它加上这个接口，就可以用了。
 */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { 1: 'Jane', 2: 'Doe', 3: 'Dan'};

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

/**
 * 上面代码中，对象jane原生不具备 Iterator 接口，无法用for...of遍历。
 * 这时，我们通过 Generator 函数objectEntries为它加上遍历器接口，
 * 就可以用for...of遍历了。加上遍历器接口的另一种写法是，
 * 将 Generator 函数加到对象的Symbol.iterator属性上面。
 */
function* objectEntries1() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

jane[Symbol.iterator] = objectEntries1;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}