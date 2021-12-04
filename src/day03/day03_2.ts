import { readFileSync } from "fs";

const mostCommon = (xs: string[]): number[] => {
  const length = xs[0].length;
  const mostCommonBits: number[] = [0];
  for (let pos = 0; pos < length; pos++){
    let tcount = 0;
    let fcount = 0;

    // calculate most common value at position
    xs.map((line) => {
      if(line[pos] === '1'){
        tcount += 1;
      } else {
        fcount += 1;
      }
    })
    if (tcount >= fcount){
      mostCommonBits[pos] = 1;
    } else {
      mostCommonBits[pos] = 0;
    }
  }
  return mostCommonBits;
}

const leastCommon = (mostCommonBits: number[]): number[] => {
  const leastCommonBits: number[] = mostCommonBits;

  mostCommonBits.forEach((value, i) => {
    leastCommonBits[i] = value === 0 ? 1 : 0;
  });
  return leastCommonBits;
}

const o2GeneratorCalc = (xs: string[], mostCommonBits: number[]): number => {
  const length = xs[0].length;
  const o2GeneratorRating: string[]  = [];
  for (let pos = 0; pos < length; pos++) {
    xs.map((line, i) => {
      if (i === 0) {
        if (line[pos] === mostCommonBits[pos].toString()){
          o2GeneratorRating.push(line);
        }
        else {
          o2GeneratorRating.filter(
            rating => rating[pos] === mostCommonBits[pos].toString()
          );
        }
      }
    });
  }
  console.log(o2GeneratorRating);
  return parseInt(o2GeneratorRating[0], 2);
}

const co2ScrubberCalc = (xs: string[], leastCommonBits: number[]): number => {
  const length = xs[0].length;
  const co2ScrubberRating: string[] = [];
  for (let pos = 0; pos < length; pos++) {
    xs.map((line, i) => {
      if (i === 0) {
        if (line[pos] === leastCommonBits[pos].toString()){
          co2ScrubberRating.push(line);
        }
        else {
          co2ScrubberRating.filter(
            rating => rating[pos] === leastCommonBits[pos].toString()
          );
        }
      }
    });
  }
  console.log(co2ScrubberRating);
  return parseInt(co2ScrubberRating[0], 2);
}

const input = readFileSync('../input/day3').toString();
const lines = input.split('\n');
const mostCommonBits = mostCommon(lines);
console.log('most common bits: ' + mostCommonBits);
const o2Rating = o2GeneratorCalc(lines, mostCommonBits);
console.log('o2 Calc: ' + o2Rating);
const leastCommonBits = leastCommon(mostCommonBits);
console.log('least common bits: ' + leastCommonBits);
const co2Rating = co2ScrubberCalc(lines, leastCommonBits);
console.log('co2 Calc: ' + co2Rating);
console.log('answer: ' + o2Rating * co2Rating);