export function getMinCost(num: number[]): number {
  let minCost = Number.MAX_SAFE_INTEGER;

  function backtrace(numArr = num, cost = 0) {
    let len = numArr.length;
    if (len === 1) {
      minCost = Math.min(minCost, cost);
      return;
    }

    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (i === j) continue;
        let calcCost = numArr[i] + numArr[j];
        let arr = Array.from(numArr);
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        arr.push(calcCost);
        console.log(i, j, arr, calcCost);

        backtrace(arr, calcCost + cost);
      }
    }
  }

  backtrace();
  return minCost;
}

let nums = [1, 2, 3]; //9
// let nums = [4, 6, 8]; // 28
console.log(getMinCost(nums));
