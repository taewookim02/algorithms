/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

nums = [0, 0, 1]
expected = [1, 0, 0]

 */
var moveZeroes = function (nums) {
  // let previous;
  // for (let i = 0; i < nums.length; i++) {
  //     previous = nums[i];
  //     if (nums[i] === 0) {
  //         nums.splice(i, 1);
  //         nums.push(0);
  //     }
  // }
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};
