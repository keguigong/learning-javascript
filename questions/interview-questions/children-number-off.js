// 小孩儿报数问题
// 一群按照顺序编号的小孩儿按照1，2，3的顺序报数，报到3的人出列，剩下的人进行下一轮报数，下一轮报数接着上一轮
// 最后的报数，如上一轮结束为2，则本轮从3开始报数。在本轮中同样报到3的人出列，依次循环，直到只剩
// 最后一个小孩儿，返回该小孩儿的编号。

const getLastNum = (total = 30, arr = [], startNum = 1) => {
  if (arr.length === 0) {
    for (let i = 0; i < 30; i++) {
      arr.push(i + 1)
    }
  }

  const remaining = []
  arr.forEach((item, index) => {
    if ((index + 1 + startNum - 1) % 3 !== 0) {
      remaining.push(item)
    }
  })

  const totalLen = arr.length
  startNum = (totalLen + startNum - 1) % 3 === 0 ? 1 : ((totalLen + startNum - 1) % 3) + 1

  if (remaining.length > 1) {
    return getLastNum(total, remaining, startNum)
  } else {
    return remaining[0]
  }
}

console.log(getLastNum(30))
