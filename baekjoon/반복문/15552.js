const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  console.log(a + b);
}
