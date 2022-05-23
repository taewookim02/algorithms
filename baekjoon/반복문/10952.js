const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.map(val => {
  const [a, b] = val.split(' ').map(Number);
  a + b !== 0 ? console.log(a + b) : '';
});
