// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  console.log("length-1: ", nums.length);
  let i = 0;
  let j = i + 1;
  let zeros = 0;
  while (j <=nums.length - 1) {
    if (nums[i] != 0) {
      i++, j++;
    } else {
      if (nums[j] != 0) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++,j++
      }
      else{
        j++;
      }
    }
  }

  console.log("length-2: ", nums.length);
  console.log(nums);
};

moveZeroes([0,1,0]);
