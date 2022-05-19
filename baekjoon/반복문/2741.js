const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

const answer = [];
for (let i = 1; i <= input; i++) answer.push(i);
console.log(answer.join('\n'));
