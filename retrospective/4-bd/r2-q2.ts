/**
 * 实现一个解码器
 *
 * 输入: 2[a3[b]]
 * 输出: abbbabbb
 *
 * 输入: 2[ab]3[cd]
 * 输出: ababcdcd
 *
 * 输入: 3[a4[b]]ef
 * 输出: abbbbabbbbabbbbef
 *
 * 且输入不会有格式错误，不会出现3[ab, 2[3], 11[a]等格式
 */

function decodeStr(s: string): string {
  // 用来保存系数
  let nums = [];
  // 用来保存临时子字符串
  let substrings = [];
  let str1 = "";

  let tmpString = "";
  for (let i = 0; i < s.length; i++) {
    // 如果字符是字母，加一个字符
    if (s[i].match(/[a-z]/)) {
      tmpString += s[i];
    }

    // 为数字，则存入栈
    if (s[i].match(/\d/)) {
      nums.push(parseInt(s[i]));
      console.log("nums: ", nums);
      continue;
    }

    if (s[i] === "[") {
      // 遇到数字存一次子串
      if (tmpString) {
        substrings.push(tmpString);
        console.log("substrings: ", substrings);
        tmpString = "";
      }
    }

    if (s[i] === "]") {
      // 说明当前[]结束，直接用tempString进行计算
      if (substrings.length < nums.length) {
        str1 += repeatStr(tmpString, nums.pop());
        tmpString = "";
        continue;
      }

      // 说明上一层[]结束
      if (substrings.length === nums.length) {
        // 注意substring添加在str1的前面
        str1 = repeatStr(substrings.pop() + str1, nums.pop());
        continue;
      }
    }

    // 末尾如果有字符，直接添加在后面
    if (i + 1 >= s.length) {
      str1 += tmpString
    }
  }

  function repeatStr(str: string, num: number): string {
    let out = "";
    for (let count = 0; count < num; count++) {
      out += str;
    }
    return out;
  }

  return str1;
}

let s = "3[a4[b]]ef";
console.log(s, "=>", decodeStr(s));
