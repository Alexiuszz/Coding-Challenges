// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

var findRow = (matrix, target) => {
  var h = 0,
    t = matrix.length - 1,
    mid;
  while (h <= t) {
    mid = h + Math.floor((t - h) / 2);
    if (target < matrix[mid][0]) {
      if (mid - 1 < 0 || target >= matrix[mid - 1][0]) {
        return matrix[mid - 1];
      } else t = mid - 1;
    } else {
      if (mid + 1 >= matrix.length || target < matrix[mid + 1][0]) {
        return matrix[mid];
      } else h = mid + 1;
    }
  }
  return false;
};
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
var searchMatrix = function (matrix, target) {
  let row = findRow(matrix, target);
  return !row
    ? false
    : binarySearch(row, target, 0, row.length - 1) > -1
    ? true
    : false;
};

console.log(
  searchMatrix(
    [
      [1]
    ],
    1
  )
);



var searchMatrix2 = function(matrix, target) {
    const M = matrix.length;
    if (M === 0) {
        return false;
    }
    const N = matrix[0].length;

    let left = 0;
    let right = M * N - 1;
    while (left <= right) {
        const pivotIdx = Math.floor((left + right) / 2);
        const pivotElement = matrix[Math.floor(pivotIdx / N)][pivotIdx % N];
        if (pivotElement === target) {
            return true;
        } else if (target < pivotElement) {
            right = pivotIdx - 1;
        } else {
            left = pivotIdx + 1;
        }
    }

    return false;
};