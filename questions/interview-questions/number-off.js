// 假设100人，分编号1～100，从1号开始报数，报数到3号时，3号淘汰，然后有下一任从1报数，以此类推，最后谁会活下来？
// 比如100报的是1，再从第一个报2，最后只剩一个编号 

function numberOff(list, startNum) {
  if (list.length === 1)
      return list.pop()

  list = list.filter((_, index) => (index + startNum) % 3 !== 0)
  console.log(list)
  startNum = (startNum - 1 + list.length) % 3 + 1
  return numberOff(list, startNum)
}

var i = 0
/** JavaScript get natural numbers: https://juejin.cn/post/6844903833341018119 */
const list = Array.from({length: 100}, (_, i) => i + 1)
console.log(numberOff(list, 1))