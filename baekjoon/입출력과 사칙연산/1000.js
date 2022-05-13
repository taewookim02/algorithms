/*
https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console



*/
// n, n<
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(input[0]) + Number(input[1]));
