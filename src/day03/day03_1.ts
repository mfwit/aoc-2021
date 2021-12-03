import { readFileSync } from "fs";

const gammaCalc = (xs: string[]): number => {
  const length = xs[0].length;
  let gammaRate = '';
  let epsilonRate = '';

  for (let pos = 0; pos < length; pos++){
    let tcount = 0;
    let fcount = 0;

    xs.map((line) => {
      if(line[pos] === '1'){
        tcount += 1;
      } else {
        fcount += 1;
      }
    })
    // console.log('pos: ' + pos + ' t: ' + tcount + ' f: ' + fcount);
    if (tcount > fcount){
      gammaRate = gammaRate.concat('1');
    } else {
      gammaRate = gammaRate.concat('0');
    }
  }

  // Bit flip for epsilon calculation
  for (let i = 0; i < gammaRate.length; i++) {
    epsilonRate += gammaRate[i] === '0' ? '1' : '0'
  }

  console.log('Gamma Rate: ' + gammaRate);
  console.log('Epsilon Rate: ' + epsilonRate);
  
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

const input = readFileSync('../input/day3').toString();
const lines = input.split('\n');
console.log('Answer: ' + gammaCalc(lines));