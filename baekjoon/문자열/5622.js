const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

/*
// console.log(input);
let time;

const dialLetterPairs = {
  // pair ABCs to numbers
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
};
// console.log(dialLetterPairs[2]);

// time taken for 1 === 2;
// time taken for 2 === 3;
// if W -> time += 9 + 1

// const objVal = Object.entries(dialLetterPairs);
let counter = 0;
for (const [key, value] of Object.entries(dialLetterPairs)) {
  if (value.indexOf(input[counter]) > -1) {
    // time += +key + 1;
    console.log('HO!');
  }
  counter++;
}
console.log(time);

// const [k, v] = Object.entries(dialLetterPairs);

// console.log(objVal);
*/

let dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

// for (let x in dial) {
//   console.log(x);
//   console.log(dial[x]);
// }

let time = 0;
for (let i = 0; i < input.length; i++) {
  for (let x in dial) {
    if (x.includes(input[i])) {
      time += dial[x];
    }
  }
}
console.log(time);
