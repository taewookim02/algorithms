////////////////////////////////////////////////////////////////
/** MY SOLUTION
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// --------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// should return true

const compareTwoArraysForCommonItems = function (arr1, arr2) {
  const uniqueArr1 = [...new Set(arr1)];
  const uniqueArr2 = [...new Set(arr2)];
  let myBool;
  uniqueArr1.forEach(item1 => {
    uniqueArr2.forEach(item2 => {
      if (item1 === item2) {
        return (myBool = true);
      } else {
        myBool = false;
      }
    });
  });
  return myBool;
};

const myBoolean = compareTwoArraysForCommonItems(array1, array2);
console.log(myBoolean);
O(a * b) Time Complexity
O(a + b) Space Complexity

Not O(n^2) because the array size is not the same

////////////////////////////////////////////////////////////////
// Brute Force
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// should return false
// --------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
// O(a * b)
// O(1) - Space Complexity

console.log(containsCommonItem(array1, array2));

////////////////////////////////////////////////////////////////
// Objects (Hash tables)

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) Time Complexity
// O(a) Space Complexity

console.log(containsCommonItem2(array1, array2));

////////////////////////////////////////////////////////////////
// More readable

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
 */

////////////////////////////////////////////////////////////////
// Extra (Google interview session)
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
