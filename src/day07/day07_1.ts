import { readFileSync } from "fs";

const calcAad = (xs: string[]): number => {
    const numbers: number[] = [];
    xs.map((s) => {
        numbers.push(parseInt(s));
    });
    numbers.sort((a,b) => (a-b));
    const median = numbers.length/2;
    let devsum = 0;
    numbers.map((num) => {
       devsum += Math.abs(num - numbers[median]);
    })
    return devsum;
}

const input = readFileSync('../input/day7').toString().split(',');
const aad = calcAad(input);
console.log('Answer: ' + aad);