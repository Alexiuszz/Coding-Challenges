// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0

function binarySearch(arr, x, start, end) {
  let l = start;
  let r = end;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) r = mid - 1;
    // Else the element can only be present
    // in right subarray
    else l = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
}

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] == target) return mid;
    if (nums[r] > nums[l]) return binarySearch(nums, target, l, r);
    if (nums[mid] > nums[l]) {
      if (nums[l] <= target && nums[mid-1] >= target)
        return binarySearch(nums, target, l, mid - 1);
      else {
        l = mid + 1;
      }
    } else {
      if (nums[mid+1] <= target && nums[r] >= target)
        return binarySearch(nums, target, mid + 1, r);
      else {
        r = mid - 1;
      }
    }
  } 
  return -1;
};

console.log(search([6,7,1,2,3,4,5],6));
