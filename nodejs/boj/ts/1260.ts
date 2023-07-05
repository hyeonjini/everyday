/**
 * Baekjoon Online Judge 1260
 * https://www.acmicpc.net/problem/1260
 *
 * @file 1260.js
 */

import readline from "readline";

let inputs: string[] = [];
let lines: number = 0;
let n: any, m: number, v: number;

class GraphNode {
  value: number;
  neighbors: GraphNode[] = [];
  visited: boolean = false;

  constructor(value: number) {
    this.value = value;
  }

  resetVisited = () => {
    this.visited = false;
  };

  addNeighbor = (neighbor: GraphNode) => {
    this.neighbors.push(neighbor);
  };

  getNeighbors = () => {
    return this.neighbors.sort((a, b) => b.value - a.value);
  };

  getNeighborsAsc = () => {
    return this.neighbors.sort((a, b) => a.value - b.value);
  };
}

let recursiveResult = "";
const recursiveDfs = (startNode: GraphNode) => {
  if (startNode.visited) return;
  startNode.visited = true;
  recursiveResult += `${startNode.value} `;
  for (const neighbor of startNode.getNeighborsAsc()) {
    recursiveDfs(neighbor);
  }
};

const dfs = (startNode: GraphNode) => {
  const stack: GraphNode[] = [];
  stack.push(startNode);
  let result = "";

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    // console.log("Pop", currentNode.value);
    if (!currentNode.visited) {
      currentNode.visited = true;
      for (const neighbor of currentNode.getNeighbors()) {
        if (!neighbor.visited) {
          stack.push(neighbor);
          //   console.log("Push", neighbor.value);
        }
      }
      result += `${currentNode.value} `;
    }
  }
  console.log(result.trim());
};

const bfs = (startNode: GraphNode) => {
  const queue: GraphNode[] = [];
  queue.push(startNode);

  let result = "";
  while (queue.length > 0) {
    const currentNode = queue.shift()!;

    // console.log("shift", currentNode.value);

    if (!currentNode.visited) {
      currentNode.visited = true;
      result += `${currentNode.value} `;
      for (const neighbor of currentNode.getNeighborsAsc()) {
        if (!neighbor.visited) {
          queue.push(neighbor);
          //   console.log("push", neighbor.value);
        }
      }
    }
  }
  console.log(result.trim());
};

const solution = (inputs: string[]) => {
  const inputEdges: Map<number, Array<number>> = new Map();

  inputs.slice(1, inputs.length).forEach((e: string) => {
    const parts = e.split(" ");
    if (!inputEdges.has(+parts[0])) {
      inputEdges.set(+parts[0], []);
    }

    inputEdges.set(+parts[0], [...inputEdges.get(+parts[0])!, +parts[1]]);
  });

  const nodes: GraphNode[] = Array.from(
    { length: n },
    (_, i) => new GraphNode(i + 1)
  );

  for (const [key, value] of inputEdges) {
    for (const v of value) {
      nodes[key - 1].addNeighbor(nodes[v - 1]);
      nodes[v - 1].addNeighbor(nodes[key - 1]);
    }
  }

  recursiveDfs(nodes[v - 1]);
  console.log(recursiveResult.trim());
  nodes.forEach((e) => e.resetVisited());
  bfs(nodes[v - 1]);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  [n, m, v] = inputs[0].split(" ").map((e) => +e);
  if (lines >= m + 1) {
    rl.close();
    return [n, m, v];
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
