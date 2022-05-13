/*
https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console

Getting input reference: https://velog.io/@dishate/%EB%B0%B1%EC%A4%80-javascript-node.js-%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B8%B0



*/
// n, n<
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

console.log(input);
