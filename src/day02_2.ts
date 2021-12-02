import { readFileSync } from "fs";

const calcCommands = (xs: string[]): number => {
  
  let horzPos = 0;
  let depth = 0;
  let aim = 0;

  xs.map((line) => {
    const direction = line.split(' ')[0];
    const amt = parseInt(line.split(' ')[1]);
    switch (direction) {
      case 'forward':
        horzPos += amt;
        depth += aim * amt;
        break;
      case 'down':
        aim += amt;
        break;
      case 'up':
        aim -= amt;
        break;
    }
  })
  return horzPos * depth;
}

const input = readFileSync('../input/day2').toString();
const lines = input.split('\n');
console.log('Answer: ' + calcCommands(lines));

