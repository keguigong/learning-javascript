/**
 * https://ts.xcatliu.com/advanced/tuple
 * 元组
 */

let tomson0: [string, number] = ['Tomson', 25]

// 简单的例子
let tomson: [string, number];
tomson[0] = 'tomson';
tomson[1] = 25;

tomson[0].slice(1);
tomson[1].toFixed(2);

/**
 * https://ts.xcatliu.com/advanced/tuple#yue-jie-de-yuan-su
 * 越界的元素
 */
tomson.push(124);
tomson.push('male');
// tomson.push(true);