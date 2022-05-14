const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [H, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

M -= 45; // 45
if (M < 0) {
  H -= 1;
  M = 60 + M;
}
if (H < 0) {
  H = 23;
}
console.log(H, M);
