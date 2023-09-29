// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s.join('');
};
var reverseWords = function (s) {
  let newString = "";
  s.split(" ").forEach((word) => {
    newString = newString.concat(" ", reverseString(word.split("")));
  });
  return newString.trimStart();
};

var reverseWords2 = function(s) {
        return s.split(" ").map(el => el.split("").reverse().join("")).join(" ")
    };
// console.log(reverseString("let's".split('')));
console.log(reverseWords("Let's take LeetCode contest"));
