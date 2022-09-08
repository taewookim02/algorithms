const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [fixedCosts, variableCosts, productPrice] = input.map(val => +val);

const totalCosts = fixedCosts + variableCosts;
console.log(totalCosts);
console.log(productPrice * 7);
console.log(Math.ceil(totalCosts / productPrice));
