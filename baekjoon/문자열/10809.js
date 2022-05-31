const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// Arr
const abc = 'abcdefghijklmnopqrstuvwxyz';
const abcFill = new Array(abc.length).fill(-1);

// const input = baekjoon

for (let i = 0; i < abc.length; i++) {
  abcFill[i] = abc;
}

console.log(abcFill);
