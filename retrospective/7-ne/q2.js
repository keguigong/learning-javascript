/**
 * 将数组拍平到指定层数
 */

const arr = [1, [2, 3, [10, 11, 12]], [5, [6, 7]]];

function flattenArray(arr, num) {
  if (num < 1) return arr;
  let tempArr = [];

  let count = 0;
  count += 1;
  arr.forEach((item, index) => {
    if (item instanceof Array) {
      console.log(item instanceof Array);
      let arr1 = flattenArray(item, num - count);
      tempArr.push(...arr1);
    } else {
      tempArr.push(item);
    }
  });

  return tempArr;
}

console.log(flattenArray(arr, 1));
