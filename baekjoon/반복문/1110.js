const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

let [a, b] = input;
if (b === undefined) {
  b = a;
  a = 0;
}
let counter = 1;
let n = 0;
// get a loop to do this 2+6 calc
// 26 ok, 55 ok, 1 x
while (n === 0) {
  let newValCalc = +a + +b + '';
  if (b + newValCalc === input) break;
  else {
    a = b;
    b = newValCalc[newValCalc.length - 1];

    counter++;
  }
}
console.log(counter);

// 26, 2+6=8
// 68, 6+8=14
// 84, 8+4=12
// 42, 4+2=6
// 26, end loop

// 0, 1+0=1
// 1, 1+0=1
