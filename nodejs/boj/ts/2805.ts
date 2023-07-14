// https://www.acmicpc.net/problem/2805

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

const solution = (inputs: string[]) => {
  const [N, M] = inputs[0].split(" ").map(Number);
  const trees: number[] = inputs[1].split(" ").map(Number);
  const result = binarySearch(trees, M);
  console.log(result);
};

const binarySearch = (trees: number[], target: number): number => {
  let left = 0;
  let right = Math.max(...trees);
  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    result = mid;
    const cuttedTree = getCuttedTree(trees, mid);
    if (cuttedTree > target) {
      left = mid + 1;
    } else if (cuttedTree < target) {
      right = mid - 1;
    } else if (cuttedTree === target) {
      return mid;
    }
  }
  return result - 1;
};

const getCuttedTree = (trees: number[], height: number) => {
  const cuttedTree = trees.reduce((acc, cur) => {
    if (cur > height) {
      acc += cur - height;
    }

    return acc;
  }, 0);
  return cuttedTree;
};

rl.on("line", (line) => {
  inputs.push(line);

  if (inputs.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  solution(inputs);
  process.exit();
});
