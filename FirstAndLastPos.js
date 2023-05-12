// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

var FindFirst = function (nums, target, start, end) {
  var h = start,
    t = end,
    mid;
  while (h <= t) {
    mid = h + Math.floor((t - h) / 2);
    if (nums[h] == target) return h;
    if (nums[t - 1] != target) return t;
    if (nums[mid] == target) {
      if (nums[mid - 1] == target) t = mid - 1;
      else return mid;
    } else if (nums[mid] != target) h = mid + 1;
  }
};
var FindLast = function (nums, target, start, end) {
  var h = start,
    t = end,
    mid;
  while (h <= t) {
    mid = h + Math.floor((t - h) / 2);
    if (nums[t] == target) return t;
    if (nums[h + 1] != target) return h;
    if (nums[mid] == target) {
      if (nums[mid + 1] == target) h = mid + 1;
      else return mid;
    } else if (nums[mid] != target) t = mid - 1;
  }
};

var searchRange = function (nums, target) {
  var h = 0,
    t = nums.length - 1,
    mid,
    pos = [-1, -1];
  while (h <= t) {
    mid = h + Math.floor((t - h) / 2);

    if (nums[mid] == target) {
      pos[0] = FindFirst(nums, target, h, mid);
      pos[1] = FindLast(nums, target, mid, t);
      return pos;
    }
    if (nums[mid] > target) {
      t = mid - 1;
    } else {
      h = mid + 1;
    }
  }
  return pos;
};

console.log(
  searchRange(
    [
      0, 0, 1, 1, 1, 2, 4, 4, 4, 4, 5, 5, 5, 6, 8, 8, 9, 9, 10, 10,
      10,
    ],
    8
  )
);

var searchRange2 = function (nums, target) {
  var h = 0,
    t = nums.length - 1,
    mid,
    pos = [-1, -1];
  while (h <= t) {
    mid = h + Math.floor((t - h) / 2);
    if (nums[mid] == target) {
      if (nums[mid - 1] == target && nums[mid + 1] == target) {
        if (nums[h] == target) {
          if (pos[0] > -1 && pos[1] > -1) return pos;
          pos[0] = h;
          //   if (pos[1] > -1) return pos;
        } else h++;
        if (nums[t] == target) {
          if (pos[1] > -1 && pos[0] > -1) return pos;
          pos[1] = t;
          //   if (pos[0] > -1) return pos;
        } else t--;
      } else if (nums[mid - 1] == target) {
        pos[1] = mid;
        t = mid;
      } else if (nums[mid + 1] == target) {
        pos[0] = mid;
        h = mid;
      } else {
        pos[0] = mid;
        pos[1] = mid;
        return pos;
      }
      if (pos[0] > -1 && pos[1] > -1) return pos;
    } else if (nums[mid] > target) {
      t = mid - 1;
    } else {
      h = mid + 1;
    }
  }
  return pos;
};
