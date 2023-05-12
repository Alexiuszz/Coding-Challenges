// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true 
// if (i == nums.length - 1) return false;
// if (3 > -1) return true;
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
        for (var i = 0; i < nums.length; i++) {
                if (i == nums.length - 1) return false;
                if (nums.indexOf(nums[i], i + 1) > -1) return true;
        }; return false
};

var containsDuplicate = function (nums) {
        let hashSet = new Set()
        for (let num of nums) {
                if (hashSet.has(num)) {
                        return true
                }
                hashSet.add(num)

        }
        return false
};

console.log(containsDuplicate([1, 2, 3]))