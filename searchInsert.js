var searchInsert = function (nums, target) {
  let head = 0;
  let tail = nums.length - 1;
  let mid;
  while (tail >= head) {
    mid = head + Math.floor((tail - head) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) {
      //       if (mid-head == 1 && nums[mid - 2] > target) return mid - 1;
      tail = mid - 1;
    } else {
      //       if (tail-mid == 1 && nums[mid + 2] < target) return mid + 1;
      head = mid + 1;
    }
  }
  if (nums[mid] > target)
    return mid - 1 < 0 ? 0 : nums[mid - 1] == target ? mid-1: mid ;
  else return mid + 1;
};

console.log(searchInsert([1,3,5,6], 2));
