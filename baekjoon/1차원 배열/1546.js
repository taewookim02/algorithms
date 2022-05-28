const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const avg = input[1].split(' ').map(Number);
const M = Math.max(...avg);
// test / M * 100 = new score
const newAvg = avg.map(val => {
  // if (val !== M) return (val / M) * 100;
  return (val / M) * 100;
});

console.log(newAvg.reduce((acc, val) => acc + val) / newAvg.length);

// const N = +input[0];
// const arr = input[1].split(' ').map(Number);
// const M = Math.max(...arr);

// for (let i = 0; i < N; i++) {
//   arr[i] = (arr[i] / M) * 100;
// }
// console.log(arr.reduce);
