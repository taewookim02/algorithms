const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
const A = +input[0];

// %4
if (A % 4 === 0 && A % 100 !== 0) {
  console.log('1');
} else if (A % 400 === 0) {
  console.log('1');
} else {
  console.log('0');
}
