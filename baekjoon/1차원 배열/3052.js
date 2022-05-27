const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputSet = new Set(input.map(val => val % 42)).size;
console.log(inputSet);
