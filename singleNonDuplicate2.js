var singleNonDuplicate = function (nums) {
  if (nums.length < 2) return nums[0];
  for (let i = 0; ; i < nums.length) {
    if (nums[i] != nums[i + 1]) return nums[i];
    i += 2;
  }
};
var singleNonDuplicate2 = function (nums) {

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if ((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 == 1 && nums[mid] == nums[mid - 1]))
          left = mid + 1;
      else {
          right = mid-1;
      }
  }
  return nums[left]
}

console.log(singleNonDuplicate2([1]));
