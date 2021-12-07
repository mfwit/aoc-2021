import { readFileSync } from "fs";

type board = {
  numbers: number[][]
  called: boolean[][]
}

const calcBingoNumbers = (xs: string): number[] => {
  const numbers: number[] = [];
  xs.split(',').map((n) => {
    numbers.push(parseInt(n));
  });
  return numbers;
}

const loadBoards = (xs: string): number[][][] => {
  let boards: number[];
  const rawBoards = xs.split('\n\n').slice(1);
  rawBoards.forEach((board, i) => {
    let boards[i]: number[];
    // console.log("board: " + i + "\n" + board);
    board.split('\n').forEach((line, y) => {
      let boards[i][y]: number[];
      line.replace(/\s+/g, ' ').split(' ').forEach((num, x) => {
        console.log("i: " + i + " y: " + y + " x: " + x + " num: " + num);
        let boards[i][y][x]  = num;
      });
    });
  });
  return boards;
}



const line1 = readFileSync('../input/day4').toString().split('\n')[0];
const boardNumbers = readFileSync('../input/day4').toString();
const bingoBoards = loadBoards(boardNumbers);
// const bingoNumbers = calcBingoNumbers(line1);

// console.log(boardNumbers);