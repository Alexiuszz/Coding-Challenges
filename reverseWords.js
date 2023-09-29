var reverseWords = (s) => {
  let words = s.trim().split(" ");
  words = words.filter((word) => word.length > 0);
  return words.reverse();
};

console.log(reverseWords(" yeah  what"));
