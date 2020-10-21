/**
 * next方法
 * https://es6.ruanyifeng.com/#docs/generator#next-%E6%96%B9%E6%B3%95%E7%9A%84%E5%8F%82%E6%95%B0
 */

/**
 * yield表达式本身没有返回值，或者说总是返回undefined。
 * next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
 */
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var aaa = foo(5);
aaa.next() // Object{value:6, done:false}
aaa.next() // Object{value:NaN, done:false}
aaa.next() // Object{value:NaN, done:true}

var bbb = foo(5);
bbb.next() // { value:6, done:false }
bbb.next(12) // { value:8, done:false }
bbb.next(13) // { value:42, done:true }