/* my solution
function mergeSortedArrays(arr1, arr2) {
  // merge the arrays
  const mergedArray = [];
  mergedArray.push(...arr1, ...arr2);
  console.log(mergedArray); // [ 0, 3, 4, 31, 4, 6, 30 ]

  // sort
  sortedArray = [];
  mergedArray.forEach((val, i, arr) => {
    // when smaller
    if (val < arr[i]) {
      sortedArray.push(val);
    }
  });
  console.log(sortedArray);
}
 */

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 4, 6, 30, 31]
