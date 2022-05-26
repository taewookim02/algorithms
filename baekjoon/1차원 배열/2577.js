const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [a, b, c] = input.map(Number);

let abc = a * b * c + '';
abc = abc.split('');

const numArr = new Array(10).fill(0);

abc.forEach((val, i) => {
  numArr[val]++;
});

console.log(numArr.join('\n'));
