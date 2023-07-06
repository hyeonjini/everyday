/**
 * Baekjoon Online Judge 2667
 * https://www.acmicpc.net/problem/2667
 *
 * @file 2667.ts
 */

import readline from "readline";
let inputs: string[] = [];
let lines = 0;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
class House {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getLocations = () => {
    return [this.x, this.y];
  };
}

const dfs = (graph: number[][]) => {
  const result = [];
  const length = graph.length;
  let numComplex = 0;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 1) {
        let count = 0;
        const stack: House[] = [];
        const start = new House(i, j);
        stack.push(start);

        while (stack.length > 0) {
          const house = stack.pop();
          if (graph[house!.x][house!.y] === 0) {
            continue;
          }
          const [x, y] = house!.getLocations();
          graph[x][y] = 0;
          count += 1;

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= length || ny >= length) {
              continue;
            }

            if (graph[nx][ny] === 1) {
              stack.push(new House(nx, ny));
            }
          }
        }

        numComplex += 1;

        result.push(count);
      }
    }
  }
  return result.sort((a, b) => a - b);
};

const solution = (inputs: string[]) => {
  const n = +inputs[0];
  const graph = inputs.slice(1, inputs.length).map((e) => {
    const temp: number[] = [];
    for (const i of e) {
      temp.push(+i);
    }
    return temp;
  });

  const result = dfs(graph);

  console.log(result.length);
  result.forEach((e) => console.log(e));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  if (lines >= +inputs[0] + 1) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
