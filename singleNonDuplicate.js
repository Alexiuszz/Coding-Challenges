var singleNonDuplicate = function (nums) {
  let result;
  nums.forEach((num) =>
    nums.filter((a) => a === num).length < 2
      ? (result = num)
      : (null)
  );
  return result;
};

console.log(singleNonDuplicate([2,1,2, 1, 8, 5,7,5,7]))