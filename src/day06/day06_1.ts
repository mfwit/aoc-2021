import { readFileSync } from "fs";

const simulateLanternFish = (xs: string[]): number {
  let fish: number[] = [];
  let newFish: number[] = [];
  const days: number = 80;

  xs.map((n) => {
    fish.push(parseInt(n));
  });
  for(let i = 0; i < days; i ++){
    fish.map((f, index) => {
      fish[index] -= 1;
      if (fish[index] == -1){
        fish[index] = 6;
        newFish.push(8);
      }
    });
    newFish.map((f) => {
      fish.push(f);
    });
    newFish = [];
    console.log(fish);
  }
  return fish.length;
}

const line1 = readFileSync('../input/day6').toString().split(',');
let lf = simulateLanternFish(line1);
console.log(lf);