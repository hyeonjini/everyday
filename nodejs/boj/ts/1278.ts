/**
 * Baekjoon Online Judge 1278
 * https://www.acmicpc.net/problem/1278
 *
 * @file 1278.js
 */

import readline from "readline";
let inputs: string[] = [];
let lines = 0;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

class Location {
  private x: number;
  private y: number;
  private visited: boolean = false;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  setVisited = (visited: boolean) => {
    this.visited = visited;
  };

  getLocations = () => {
    return [this.x, this.y];
  };
}

/**
 *
 * Depth First Search is not suitable for this problem,
 * because it is not guaranteed to find the shortest path.
 *
 **/

const dfs = (graph: number[][]) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const stack: Location[] = [];

  const start = new Location(0, 0);

  stack.push(start);

  while (stack.length > 0) {
    const [x, y] = stack.pop()!.getLocations()!;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= graph.length || ny >= graph[0].length) {
        continue;
      }
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        stack.push(new Location(nx, ny));
        console.log(graph);
      }
    }
  }

  return graph[graph.length - 1][graph[0].length - 1];
};

const bfs = (graph: number[][]) => {
  const queue: Location[] = [];
  const start = new Location(0, 0);
  queue.push(start);
  while (queue.length > 0) {
    const [x, y] = queue.shift()!.getLocations()!;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= graph.length || ny >= graph[0].length) {
        continue;
      }

      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push(new Location(nx, ny));
        console.log(graph);
      }
    }
  }

  return graph[graph.length - 1][graph[0].length - 1];
};

const solution = (inputs: string[]) => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const graph = inputs.slice(1, inputs.length).map((e) => {
    const temp: number[] = [];
    for (const i of e) {
      temp.push(+i);
    }
    return temp;
  });

  console.log(bfs(graph));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  if (lines >= +inputs[0].split(" ")[0] + 1) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
