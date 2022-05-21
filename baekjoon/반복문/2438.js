const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = parseInt(fs.readFileSync(filePath).toString());

const str = '*';
for (let i = 1; i <= input; i++) {
  console.log(str.repeat(i));
}
