var search = function (nums, target) {
  let head = 0;
  let tail = nums.length - 1;
  while (tail - head > 1) {
    let mid = Math.floor((head + tail) / 2);
    if (nums[mid] < target) {
      head = mid + 1;
    } else {
      tail = mid;
    }
  }
  return nums[head] == target
    ? head
    : nums[tail] == target
    ? tail
    : -1;
};
function binarySearch(arr, x)
{    
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
   
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
   
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            r = mid - 1;
              
        // Else the element can only be present
        // in right subarray
        else 
            l = mid + 1;
    }
   
    // We reach here when element is not
    // present in array
    return -1;
}
console.log(search([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 30));
console.log(
  binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 30)
);
