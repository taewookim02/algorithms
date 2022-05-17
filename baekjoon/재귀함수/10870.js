const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// 0, 1, 2
// 0, 1, 3

const myFunc = function (n) {
  if (n === 1) return 1;
  return n + myFunc(n - 1);
};

console.log(myFunc(input));
