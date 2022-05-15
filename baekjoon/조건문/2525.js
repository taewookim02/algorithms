const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let [H, M] = input[0].split(' ').map(Number);
const cookingMin = Number(input[1]);

// calculate time
if (cookingMin + M < 60) {
  M += cookingMin;
} else if (cookingMin + M > 60) {
  H += Math.trunc((cookingMin + M) / 60);
  if (H > 24) H = H % 24;
  M = (cookingMin + M) % 60;
} else if (cookingMin + M === 60) {
  H++;
  M = 0;
}
if (H === 24) {
  H = 0;
}
console.log(H, M);
