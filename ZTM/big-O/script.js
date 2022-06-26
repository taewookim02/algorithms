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
