/**
 * 小美的平衡矩阵
 * https://www.nowcoder.com/exam/test/78350577/detail?pid=55750560
 * 题解：https://mp.weixin.qq.com/s/I47DxbXrTCQpt-7FIPW5lg
 */
import { createInterface } from "readline"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

let n = -1,
  rowCount = 0
let matrix: string[][] = []

rl.on("line", function (line: string) {
  if (n < 0) {
    n = parseInt(line)
  } else if (rowCount < n) {
    rowCount++
    matrix.push(line.split(""))

    if (rowCount >= n) calcMatrixNumber()
  } else {
    rowCount = 0
    n = -1
    matrix = []
  }
})

function calcMatrixNumber() {
  const dp: number[][] = Array.from(new Array(n), () => new Array(n).fill(0))

  for (let i = 1; i <= n; i++) {
    let perfectCount = 0

    for (let row = 0; row < n - i + 1; row++) {
      for (let col = 0; col < n - i + 1; col++) {
        let oneCount = 0,
          zeroCount = 0

        for (let x = 0; x < i; x++) {
          if (matrix[row + i - 1][col + x] === "1") oneCount++
          else zeroCount++
        }

        for (let y = 0; y < i; y++) {
          if (matrix[row + y][col + i - 1] === "1") oneCount++
          else zeroCount++
        }

        // 算了两遍
        if (matrix[row + i - 1][col + i - 1] === "1") oneCount--
        else zeroCount--

        const diff = dp[row][col]
        dp[row][col] = oneCount - zeroCount + diff

        if (oneCount - zeroCount + diff === 0) {
          perfectCount++
        }
      }
    }
    console.log(perfectCount)
  }
}
