const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const M = Math.max(...arr);
// test / M * 100 = new score
const newAvg = arr.map(val => (val / M) * 100);

console.log(newAvg.reduce((acc, val) => acc + val) / newAvg.length);
