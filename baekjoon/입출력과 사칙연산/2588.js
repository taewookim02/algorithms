const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 472 * 5
console.log(+input[0] * +input[1][2]);
// 472 * 8
console.log(+input[0] * +input[1][1]);
// 472 * 3
console.log(+input[0] * +input[1][0]);
// final
console.log(+input[0] * +input[1]);
