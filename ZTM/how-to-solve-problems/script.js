// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// should return false
// --------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

const compareTwoArraysForCommonItems = function (arr1, arr2) {
  const uniqueArr1 = [...new Set(arr1)];
  const uniqueArr2 = [...new Set(arr2)];
  let myBool;
  uniqueArr1.forEach(item1 => {
    uniqueArr2.forEach(item2 => {
      if (item1 == item2) {
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
