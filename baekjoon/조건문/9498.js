const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
const A = +input[0];

if (A >= 90 && A <= 100) console.log('A');
if (A >= 80 && A <= 89) console.log('B');
if (A >= 70 && A <= 79) console.log('C');
if (A >= 60 && A <= 69) console.log('D');
if (A <= 59) console.log('F');
