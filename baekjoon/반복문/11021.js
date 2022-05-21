const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const testN = +input[0];

let answer = '';

for (let i = 1; i <= testN; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  answer += `Case #${i}: ${a + b}` + '\n';
}
console.log(answer);
