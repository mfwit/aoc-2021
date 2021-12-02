import { readFileSync } from "fs";

const increases = (xs: number[]): number => xs.slice(1).filter((x, i) => x > xs[i]).length;

const sumArray = (xs: number[]): number[] => {
  const lastWindow = xs.length - 3;
  const result = [];
  for (let i = 0; i <= lastWindow; i += 1) {
    const window = xs.slice(i, i + 3);
    result.push(window.reduce((total, num) => total + num))
  }
  return result;
}

const input = readFileSync('../input/day1').toString();
const lines = input.split('\n').map(x => parseInt(x));
console.log('Answer 1: ' + increases(lines));
console.log('Answer 2: ' + increases(sumArray(lines)));