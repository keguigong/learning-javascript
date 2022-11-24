/**
 * Q1 给定一个字符串 s，找到 s 中最长的回文子串。
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba"也是一个有效。
 * 
 * 示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 */

function findRepeatedString(s: string) {
  let maxLength = 0;
  let repeatedString = "";

  for (let i = 0; i < s.length; i++) {

    for (let length = 1; i + length <= s.length; length++) {

      let newString = s.slice(i, i + length);
      let reversedStr = Array.from(newString).reverse().join('');
      console.log(newString, reversedStr);
      let halfLen = Math.floor(length / 2);
      if (newString.slice(0, halfLen) === reversedStr.slice(0, halfLen)) {
        if (length > maxLength) {
          maxLength = length;
          repeatedString = newString;
        }
      }

    }

  }

  return repeatedString;
}

let str = "babad";
console.log(findRepeatedString(str));
