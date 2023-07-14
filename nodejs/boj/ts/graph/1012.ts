/**
 * Baekjoon Online Judge 1012
 * https://www.acmicpc.net/problem/1012
 *
 * @file 1012.ts
 */

import * as readline from "readline";

const inputs: string[] = [];
let lines = 0;
let count = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const dfs = (array: Array<boolean[]>, x: number, y: number) => {
  const stack = [[x, y]];
  let result = 0;

  while (stack.length > 0) {
    const [x, y] = stack.pop()!;
    if (array[y][x] === true) continue;

    if (array[y][x] === false) {
      array[y][x] = true;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= array[0].length || ny >= array.length) {
          continue;
        }

        if (array[ny][nx] === false) {
          stack.push([nx, ny]);
        }
      }
    }
    result += 1;
  }
  return result;
};

const solution = (inputs: string[]) => {
  let count = 1;
  let result = 0;
  for (let i = 0; i < +inputs[0]; i++) {
    const [m, n, k] = inputs[count].split(" ").map((e) => +e);
    const array = Array.from({ length: n }, () => Array(m).fill(true));

    for (let j = count + 1; j < +inputs[count].split(" ")[2] + count + 1; j++) {
      const [x, y] = inputs[j].split(" ").map((e) => +e);
      array[y][x] = false;
    }

    for (let k = 0; k < m; k++) {
      for (let l = 0; l < n; l++) {
        if (dfs(array, k, l) > 0) {
          result += 1;
        }
      }
    }
    console.log(result);
    result = 0;
    count += +inputs[count].split(" ")[2] + 1;
  }
};

rl.on("line", (line: string) => {
  lines++;
  if (line.split(" ").length === 1) {
    count += +line + 1;
  }
  if (line.split(" ").length === 3) {
    count += +line.split(" ")[2];
  }

  inputs.push(line);

  if (lines === count) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
