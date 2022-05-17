const fs = require('fs');
const { maxHeaderSize } = require('http');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [a, b, c] = input;

if (a === b || a === c || b === c) {
  // 3 identical
  if (a === b && a === c && b === c) console.log(a * 1000 + 10000);
  // 2 identical
  if (a === b || a === c) console.log(a * 100 + 1000);
  if (b === c) console.log(b * 100 + 1000);
  // no identical
} else if (a !== b && a !== c && b !== c) {
  let high = 0;
  for (let i of [a, b, c]) {
    i > high ? (high = i) : '';
  }
  console.log(high * 100);
}
