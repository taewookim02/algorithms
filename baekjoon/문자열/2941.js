const fs = require('fs');
const { join } = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
let answer = input;

const croAlphabet = {
  'c=': 'č',
  'c-': 'ć',
  'dz=': 'dž',
  'd-': 'đ',
  lj: 'lj',
  nj: 'nj',
  's=': 'š',
  'z=': 'ž',
};

const croAlphabetList = [...Object.keys(croAlphabet)];
const answerList = [];

// if there are two same cro alphabet in input, it'll ignore the other one?

croAlphabetList.map((val, i) => {
  if (input.includes(val)) answerList.push(croAlphabetList[i]);
});
console.log(answerList);

answerList.forEach(val => {
  answer = answer.replace(val, 'k');
});
console.log(answer);
console.log(answer.length);
