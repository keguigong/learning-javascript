/**
 * 在node环境中并行的读取多个文件，并一起返回各个文件的行数
 */

import { readFile } from "fs";

function readLinesOfEachFile(filePaths: string[]): Promise<any> {
  let count = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < filePaths.length; i++) {
      startRead(filePaths[i]).then(({ filePath, lines }) => {
        console.log(`${filePath}: ${lines} lines`);
        count += 1;
        if (count === filePaths.length) {
          resolve(null);
        }
      });
    }
  });

  function startRead(filePath: string) {
    return new Promise((resolve) => {
      let data = readFile(filePath, "utf-8", (error, data) => {
        let lines = readLines(data);
        resolve({
          filePath,
          lines,
        });
      });
    });
  }

  function readLines(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "\n") {
        count += 1;
      }
    }
    if (s.length !== 0) count += 1;
    return count;
  }
}

const filePaths = [
  "/home/keguigong/Documents/learning-ecmascript-6/retrospective/2-bd/q1.ts",
  "/home/keguigong/Documents/learning-ecmascript-6/retrospective/2-bd/q2.ts",
  "/home/keguigong/Documents/learning-ecmascript-6/retrospective/2-bd/README.md",
];

readLinesOfEachFile(filePaths);
