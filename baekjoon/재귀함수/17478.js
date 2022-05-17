const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const num = +input;

// 10

// const myFunc = function (n) {
//   if (n === 0) return 1;
//   if (n === 1) return 1;
//   return n * myFunc(n - 1);
// };

const myFunc = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * myFunc(n - 1);
};

console.log(myFunc(num));
