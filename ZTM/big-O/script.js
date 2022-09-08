'use strict';

///////////////////////////////////////////////////
// O(n)

const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(100000).fill('nemo');

const findNemo = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!!');
      break;
    }
  }
};

findNemo(everyone); // O(n) --> Linear Time

///////////////////////////////////////////////////
// O(1)

const boxes = [0, 1, 2, 3, 4];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) --> Constant Time

///////////////////////////////////////////////////
// Rule 1: Worst Case
// Even if the input was positioned in a way that the algo is O(1), it should consider
// that the input was in the worst case possible position.
// Rule 2: Drop the Constants
// If the constants are present with Big O, when the numbers increase,
// there comes a point where those constants stops to matter.
// Rule 3: Different terms for inputs
// Nested for loops => * O(a * b)
// Same indentation levels => + O(a + b)
// Rule 4: Drop non dominants
// if O(n + n^2) {
//  return O(n^2) // because n^2 is more dominant
// }
// Space Complexity, Time Complexity

function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(a + b);

// Log all pairs of array
const boxes2 = [1, 2, 3, 4, 5];
let counter = 0;
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
      counter += 1;
    }
  }
}

logAllPairsOfArray(boxes2);
console.log(counter);
