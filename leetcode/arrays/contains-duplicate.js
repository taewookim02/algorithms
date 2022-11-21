/*
var containsDuplicate = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  // console.log(sortedArr);
  sortedArr.forEach((val, i, arr) => {
    if (val === arr[i - 1]) {
      return true;
    }
  });
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Create memory
  // Go throught array and see if the val is what I've seen before
  // if my number is never seen before, put it in memory
  // if the number does exist in memory, return true
  // [1,2,3,1]
  let memory = {};

  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = 'exists';
    } else {
      return true;
    }
  }

  return false;
};
