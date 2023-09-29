var rotate = function (nums, k) {
  if (k == 0) return;
  else {
    let end;
    while (k > 0) {
      end = nums[nums.length - 1];
      for (let i = nums.length - 1; i > 0; i--) {
        let prev = nums[i - 1];
        nums[i] = prev;
      }
      k--;
      nums[0] = end;
    }
    return nums;
  }
};

var rotate2 = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
  return nums;
};
console.log(rotate2([0, 1, 2, 3, 4, 5, 6], 4));

const getDays = () => {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];

  const today = new Date();
  console.log(today.getDay())
  return rotate2(days, today.getDay());
};
console.log(getDays().reverse())