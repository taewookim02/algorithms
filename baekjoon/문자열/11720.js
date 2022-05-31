const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let count = 0;
for (let i = 0; i < +input[0]; i++) {
  count += +input[1][i];
}
console.log(count);
