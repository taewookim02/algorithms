const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
console.log(n, x);
console.log(arr);
