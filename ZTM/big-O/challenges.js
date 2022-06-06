'use strict';
///////////////////////////////////////////////////
// Challenge 1: Big O
/*
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    // // O(input * 3)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; //O(n)
  }
  return a; // O(1)
}

BIG O(3 + 4n)
*/

///////////////////////////////////////////////////
// Challenge 2: Big O

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // 1
  let b = 10; // 1
  let c = 50; // 1
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // 1
}

// BIG O(4 + 7n)
