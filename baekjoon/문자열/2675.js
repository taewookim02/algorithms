const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.slice(1);
let answer = '';
arr.forEach(val => {
  const [R, S] = val.split(' ');

  S.split('').forEach(v => {
    answer += v.repeat(R);
  });
  answer += '\n';
});

console.log(answer.trim());
