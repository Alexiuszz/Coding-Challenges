var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let sqr = [];
  let midMax = 0;
  let midMin = 0;
  while (i < j) {
    let l = nums[i] * nums[i];
    let r = nums[j] * nums[j];
    if (l > r) {
      sqr.splice(1, 0, 4);
      sqr.unshift(l);
      sqr.unshift(r);
      midMax = i;
      midMin = j;
    } else {
      sqr.unshift(r);
      sqr.unshift(l);
    }
    i++, j--;
  }
  return sqr;
};

var sortedSquares = function (nums) {
  const size = nums.length;
  let i = 0;
  let j = size - 1;
  let arr = [];

  for (let x = 0; x < size; x++) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      arr.push(nums[i] * nums[i]);
      i++;
    } else {
      arr.push(nums[j] * nums[j]);
      j--;
    }
  }
  return arr.reverse();
};

console.log(sortedSquares([-6, -5, 1, 2]));
