// 使用这个方法
export const drawLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void => {
  console.log(`drawLine: [${x1}, ${y1}]-[${x2}, ${y2}]`);
};

export const getMod = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

// 每隔一个单位画一条直线，超出部门不画
// |_ _ _ _ _ _ |
export const drawDashedLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void => {
  // 在此处编写
  const dashNum = getMod(x1, y1, x2, y2);
  const deltaX = (x2 - x1) / dashNum;
  const deltaY = (y2 - y1) / dashNum;

  let drawFlag = false;
  for (let i = 1; i <= dashNum; i++) {
    drawFlag = !drawFlag;
    if (drawFlag) {
      drawLine(
        x1 + deltaX * (i - 1),
        y1 + deltaY * (i - 1),
        x1 + deltaX * i,
        y1 + deltaY * i
      );
    }
  }

  const remaining = dashNum % 1;
  if (drawFlag && remaining) {
    drawLine(
      x1 + deltaX * Math.floor(dashNum),
      y1 + deltaY * Math.floor(dashNum),
      x2,
      y2
    );
  }
};

drawDashedLine(0, 0, 8, 10);
