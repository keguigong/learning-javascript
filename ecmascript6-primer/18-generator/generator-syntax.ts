/**
 * https://es6.ruanyifeng.com/#docs/generator
 * Generator 函数的语法
 */

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

let hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

// { value: 'hello', done: false }
// { value: 'world', done: false }
// { value: 'ending', done: true }
// { value: undefined, done: true }

/**
 * Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
 */
function* f() {
  console.log('执行了！')
}

var generator = f();

// setTimeout(function () {
//   generator.next();
// }, 2000);


/**
 * 但是在里面使用了yield表达式（这个函数里面还使用了yield*表达式，详细介绍见后文）。一种修改方法是改用for循环。
 */
var arr1 = [1, [[2, 3], 4], [5, 6], [7, [8, 9], 10]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (let f of flat(arr1)) {
  console.log(f);
}