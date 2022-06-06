const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
let time;
console.log(input);

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
console.log(dialLetterPairs);

// Loop over input
for (let char of input) {
  // find corresponding number and add to time
  // console.log(Object.values(dialLetterPairs);
}
console.log(dialLetterPairs.includes(['P', 'Q', 'R', 'S']));

// https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
