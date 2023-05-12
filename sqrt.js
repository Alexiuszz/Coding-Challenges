var i = 0;
var odd = -1;
var mySqrt = function (x) {
  odd += 2;
  x -= odd;
  if (x < 0) return i;
  i++;
  return mySqrt(x);
};

console.log(mySqrt(8));
console.log(mySqrt(6));
console.log(mySqrt(15));
console.log(mySqrt(16));
