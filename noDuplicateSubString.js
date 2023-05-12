// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function (s) {
  var dict = new Map();
  var maxLen = 0,
    start = -1;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (dict.get(char) > start) start = dict.get(char);
    dict.set(char, i);
    maxLen = maxLen > i - start ? maxLen : i - start;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcaagffhhhhnfhhhdgggyuytertyabcdbb"));
// var lengthOfLongestSubstring = function (s) {
//   var str1 = new Set();
//   var str2 = new Set();
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (!str1.has(char)) {
//       str1.add(char);
//     } else {
//       if (str2.size < str1.size) {
//         str2 = new Set(str1);
//       }
//       str1.clear();
//       str1.add(char);
//     }
//   }
//   return str2.size > str1.size ? str2.size : str1.size;
// };
