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
  // 保存数字的栈
  let nums = [];
  // 保存临时子字符串的栈
  let substrings = [];
  // 保存最终的字符串
  let outstr = "";
  // 保存嵌套结构的字符串
  let nestedStr = "";
  // 保存遍历的时候临时字符串
  let tmpSubstr = "";
  for (let i = 0; i < s.length; i++) {
    // 为字母字符，添加进临时字符串
    if (s[i].match(/[a-z]/)) {
      tmpSubstr += s[i];
      continue;
    }

    // 为数字，则存入数字栈
    if (s[i].match(/\d/)) {
      nums.push(parseInt(s[i]));
      console.log("nums: ", nums);
      continue;
    }

    if (s[i] === "[") {
      // 为[, 添加临时字符串至栈中
      if (tmpSubstr) {
        substrings.push(tmpSubstr);
        console.log("substrings: ", substrings);
        tmpSubstr = "";
      }
      continue;
    }

    // 为], 一层[]结束，进行计算
    if (s[i] === "]") {
      // 更上一层[]结束
      if (substrings.length === nums.length) {
        // 注意substring添加在nestedStr的前面
        nestedStr = repeatStr(substrings.pop() + nestedStr, nums.pop());
      }

      // 直接用tmpSubstr进行计算
      if (substrings.length < nums.length) {
        nestedStr += repeatStr(tmpSubstr, nums.pop());
        console.log("nestedStr: ", nestedStr);
        tmpSubstr = "";
      }

      // 如果一个嵌套结构完成，则添加到outstr
      if (nums.length < 1) {
        outstr += nestedStr;
        nestedStr = "";
      }
    }

    // 末尾如果有字符，直接添加在后面
    if (i + 1 >= s.length) {
      outstr += tmpSubstr;
    }
  }

  function repeatStr(str: string, num: number): string {
    let out = "";
    for (let count = 0; count < num; count++) {
      out += str;
    }
    return out;
  }

  return outstr;
}

let s = "3[e2[a]]";
console.log(s, "=>", decodeStr(s));
