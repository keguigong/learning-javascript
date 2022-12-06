/**
 * 给定一个字符串，找出其中连续重复次数最多的的字符以及重复的次数
 * 输入aabbbbcccddddddee
 * 输出{ string: "d", count: 6}
 */

function findString(str: string) {
  // your code here
  let maxCount = 0;
  let maxstr = "";

  let count = 1;
  let prestr = "";
  for (let i = 0; i < str.length; i++) {
    count = 1;
    while (str[i] === str[i + 1]) {
      count += 1;
      i += 1;
    }
    if (count > maxCount) {
      maxstr = str[i];
      maxCount = count;
    }
  }

  return {
    string: maxstr,
    count: maxCount,
  };
}

let str2 = "aabbbbcccddddddee";
let res = findString(str2);
console.log(res.string === "d" && res.count === 6);
// true
