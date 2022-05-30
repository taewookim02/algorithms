const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input.slice(1);

for (let i = 0; i < N; i++) {
  const scores = arr[i].split(' ').map(Number);
  const numStudents = scores.shift();
  const average = scores.reduce((acc, val) => acc + val, 0) / numStudents;

  const higherThanAverage = scores.filter(val => val > average);
  const answer = ((higherThanAverage.length / numStudents) * 100).toFixed(3);

  console.log(answer + '%');
}

// for (const person of arr) {
//   const personArr = person.split(' ');
//   const personN = +personArr[0];
//   // Getting average
//   const personTestScores =
//     personArr
//       .slice(1)
//       .map(Number)
//       .reduce((acc, val) => acc + val, 0) / personN;

//   // Filter the array with only those who got higher than avg
//   const filteredArr = personArr.filter(val => val > personTestScores);

//   // Format the string log 40.000%
//   const answer = ((filteredArr.length / personN) * 100).toFixed(3);
//   console.log(answer + '%');
// }

/*
for (let person of arr) {
  let personArr = person.split(' ');
  // Getting average
  let personTestScores =
    personArr
      .slice(1)
      .map(Number)
      .reduce((acc, val) => acc + val, 0) / personArr[0];

  // Filter the array with only those who got higher than avg
  let filteredArr = personArr.filter(val => val > personTestScores);

  // Format the string log 40.000%
  let answer = `${((filteredArr.length / personArr[0]) * 100).toFixed(3)}%`;
  // if (answer === '0.000%') console.log('0%');
  console.log(answer);
}
 */
