/*An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
 
*/

// var isMonotonic = function (nums) {
//   const isMonoI = nums[0] <= nums[nums.length - 1];
//   console.log("isMonoI", isMonoI);
//   for (let i = 0, j = 1; i < nums.length - 1; i++, j++) {
//     if (!(isMonoI == nums[i] <= nums[j])) {
//       console.log("check", nums[i] <= nums[j], i, j);
//       return false;
//     }
//   }
//   return true;
// };

var isMonotonic = function (nums) {
  let t = null;
  for (let i = 0, j = 1; i < nums.length - 1; i++, j++) {
    if (nums[i] < nums[j]) {
      if (t == null) t = true;
      else {
        if (t != nums[i] < nums[j]) return false;
      }
    } else if (nums[i] > nums[j]) {
      if (t == null) t = false;
      else {
        if (!t != nums[i] > nums[j]) return false;
      }
    }
  }
  return true;
};
console.log(isMonotonic([2, 2, 3]));
