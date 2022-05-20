const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = '';
for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  answer += a + b + '\n';
}
console.log(answer);
