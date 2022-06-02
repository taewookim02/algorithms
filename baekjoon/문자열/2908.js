const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let A;
let B;
input.forEach((v, i) => {
  i === 0
    ? (A = +v.split('').reverse().join(''))
    : (B = +v.split('').reverse().join(''));
});

A > B ? console.log(A) : console.log(B);
