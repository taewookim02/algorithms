const fs = require('fs');
const { maxHeaderSize } = require('http');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
console.log(a, b, c);

for (let i of [a, b, c]) {
  if (i === a) {
    counter++;
  } else if (i === b) {
    counter++;
  } else if (i === c) {
    counter++;
  }
}
if (counter === 1) {
  console.log(Math.max([a, b, c]) * 100);
}

console.log(counter);
