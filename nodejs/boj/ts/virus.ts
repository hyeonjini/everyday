/**
 * Baekjoon Online Judge 2606
 * https://www.acmicpc.net/problem/2606
 *
 * @file 2606.js
 */

import readline from "readline";

let numComputer: number;
let numNetwork: number;
let network: number[][];
let input: string[] = [];
let lines = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class GraphNode {
  value: number;
  neighbors: GraphNode[] = [];
  visited: boolean = false;

  constructor(value: number) {
    this.value = value;
  }

  addNeighbor(neighbor: GraphNode) {
    this.neighbors.push(neighbor);
  }
}

const bfs = (startGraphNode: GraphNode) => {
  const queue: GraphNode[] = [];
  startGraphNode.visited = true;
  queue.push(startGraphNode);
  let result = 0;

  while (queue.length > 0) {
    // shift() - Removes the first element from an array and returns it.
    const currentGraphNode = queue.shift();

    for (const neighbor of currentGraphNode!.neighbors) {
      if (!neighbor.visited) {
        neighbor.visited = true;
        queue.push(neighbor);
        result += 1;
      }
    }
  }

  return result;
};

const solution = (input: any[]) => {
  numComputer = +input[0];
  numNetwork = +input[1];
  network = [
    ...input.slice(2, input.length).map((e: string) => {
      const parts = e.split(" ");
      return [+parts[0], +parts[1]];
    }),
  ];

  const GraphNodes: GraphNode[] = [];
  for (let i = 0; i < numComputer; i++) {
    GraphNodes.push(new GraphNode(i + 1));
  }

  for (const [a, b] of network) {
    GraphNodes[a - 1].addNeighbor(GraphNodes[b - 1]);
    GraphNodes[b - 1].addNeighbor(GraphNodes[a - 1]);
  }

  console.log(bfs(GraphNodes[0]));
};

rl.on("line", (line: string) => {
  input.push(line);
  lines++;

  if (lines >= +input[1] + 2) {
    rl.close();
  }
}).on("close", () => {
  solution(input);
  process.exit();
});
