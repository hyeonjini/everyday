/**
 * Baekjoon Online Judge 11724
 * https://www.acmicpc.net/problem/11724
 *
 * @file 11724.ts
 */

import readline from "readline";
let inputs: string[] = [];
let lines = 0;

class GraphNode {
  value: number;
  neighbors: GraphNode[] = [];
  visited: boolean = false;
  constructor(value: number) {
    this.value = value;
  }

  addNeighbor = (neighbor: GraphNode) => {
    this.neighbors.push(neighbor);
  };
}

const dfs = (node: GraphNode) => {
  if (node.visited) return;

  node.visited = true;

  for (const neighbor of node.neighbors) {
    dfs(neighbor);
  }
  return 1;
};

const solution = (inputs: string[]) => {
  const [n, m] = inputs[0].split(" ").map((e) => +e);
  let result = 0;
  const nodes: GraphNode[] = [];
  for (let i = 0; i < n; i++) {
    nodes.push(new GraphNode(i + 1));
  }

  for (let i = 0; i < m; i++) {
    const [x, y] = inputs[i + 1].split(" ").map((e) => +e);
    nodes[x - 1].addNeighbor(nodes[y - 1]);
    nodes[y - 1].addNeighbor(nodes[x - 1]);
  }

  for (const node of nodes) {
    if (!node.visited) {
      result += dfs(node) ? 1 : 0;
    }
  }
  console.log(result);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  if (lines >= +inputs[0].split(" ")[1] + 1) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
