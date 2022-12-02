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
 * 且输入不会有格式错误，不会出现3[ab, 2[3]等格式
 */

function decodeStr(s: string): string {
  let times = []
  let chars = []
  
  let tempChar = ''
  let isStr = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      times.push(parseInt(s[i - 1]))
      isStr = true
    }

    if (s[i] === ']') {
      let repeat = times.pop()
      isStr = false
    }

    if (typeof parseInt(s[i]) === 'number') {
      
    }
  }
  return "";
}
