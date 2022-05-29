const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input.slice(1);

let consecutive = 0;
let answer = 0;

for (const item of arr) {
  for (const char of item) {
    if (char === 'O') {
      consecutive++;
      answer += consecutive * 1;
    } else {
      consecutive = 0;
    }
  }
  console.log(answer);
  answer = 0;
  consecutive = 0;
}

// // for (let i = 1; i <= N; i++) {
// for (const val of input) {
//   for (const value of val) {
//     if (value === 'O') {
//       consecutive++;
//       answer += consecutive * 1;
//     } else {
//       consecutive = 0;
//     }
//     console.log(answer);
//     consecutive = 0;
//     answer = 0;
//   }
// }
