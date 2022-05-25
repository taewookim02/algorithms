const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const max = Math.max(...input);
const index = input.indexOf(max);
console.log(max);
console.log(index + 1);
