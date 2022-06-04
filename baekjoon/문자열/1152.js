const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

// short circuiting
const answer = input.filter(el => el !== '' && el !== '\n');
console.log(answer.length);
