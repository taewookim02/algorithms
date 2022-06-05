const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();

// use objects
const count = {};
for (let i = 0; i < input.length; i++) {
  count[`${input[i]}`] = 0;
}
for (let i = 0; i < input.length; i++) {
  count[`${input[i]}`]++;
}

// get max used char
const max = Math.max(...Object.values(count));

// filtered array
const values = Object.values(count).filter(val => val >= max);

// printing answer
values.length > 1
  ? console.log('?')
  : console.log(Object.keys(count).find(key => count[key] === max));
