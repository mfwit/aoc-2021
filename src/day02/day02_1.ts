import { readFileSync } from "fs";

const calcCommands = (xs: string[]): number => {
  
  let horzPos = 0;
  let depth = 0;

  xs.map((line) => {
    const direction = line.split(' ')[0];
    const amt = parseInt(line.split(' ')[1]);
    switch (direction) {
      case 'forward':
        horzPos += amt;
        break;
      case 'down':
        depth += amt;
        break;
      case 'up':
        depth -= amt;
        break;
    }
  })
  return horzPos * depth;
}

const input = readFileSync('../input/day2').toString();
const lines = input.split('\n');
console.log('Answer: ' + calcCommands(lines));

