/**
 * https://ts.xcatliu.com/basics/declaration-files
 * 声明文件
 */

jQuery1('#foo');
// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
jQuery1 = function (selector) {
  return document.querySelector(selector);
};
//
jQuery2('#foo');
//
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
