import { readFileSync } from "fs";

const sumReduce = (pv, cv) => pv + cv;

const calcAad = (xs: string[]): number => {
    const numbers: number[] = [];
    xs.map((s) => {
        numbers.push(parseInt(s));
    });
    numbers.sort((a,b) => (a-b));
    console.log(numbers);

    const mean = Math.round(numbers.reduce(sumReduce)/numbers.length);
    console.log(mean);
    let devsum = 0;
    let dev = 0;
    numbers.map((num) => {
        dev = Math.abs(num - mean);
        console.log(dev);
        devsum += (1+dev)*(dev/2);
    })
    return devsum;
}

const input = readFileSync('../input/day7').toString().split(',');
const aad = calcAad(input);
console.log('Answer: ' + aad);