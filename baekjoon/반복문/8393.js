const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);
let output = 0;

for (let i = 1; i <= n; i++) {
  output += i;
}
console.log(output);
