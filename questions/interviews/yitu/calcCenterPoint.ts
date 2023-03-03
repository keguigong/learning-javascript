import { getMod } from "./drawDashedLine";

export const calcCenterPoint = (arr: number[][]): number[] => {
  const storeLen: number[] = [];
  let totalLen = 0;
  for (let i = 1; i < arr.length; i++) {
    const vector = [arr[i][0] - arr[i - 1][0], arr[i][1] - arr[i - 1][1]];
    const mod = getMod(0, 0, vector[0], vector[1]);
    totalLen += mod;
    storeLen.push(totalLen);
  }

  const halfLen = totalLen / 2;
  let index = 0;
  let remainingLen = 0;
  for (let i = 0; i < storeLen.length; i++) {
    if (storeLen[i] >= halfLen) {
      index = i;
      remainingLen = storeLen[i] - halfLen;
      break;
    }
  }

  const partLen = getMod(
    arr[index][0],
    arr[index][1],
    arr[index + 1][0],
    arr[index + 1][1]
  );

  return [
    arr[index][0] +
      (remainingLen / partLen) * (arr[index + 1][0] - arr[index][0]),
    arr[index][1] +
      (remainingLen / partLen) * (arr[index + 1][1] - arr[index][1]),
  ];
};
