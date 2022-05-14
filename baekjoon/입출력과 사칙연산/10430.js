const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
for (let i = 0; i < input.length; i++) {
  input[i] = Number(input[i]);
}

console.log((input[0] + input[1]) % input[2]);
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
// console.log(fs.readFileSync(filePath).toString().split(' '));
