var mySqrt = function (x) {
  let i = 0;
  let odd = 1;
  while (x - odd >= 0) {
    x -= odd;
    i++;
    odd += 2;
  }
  return i;
};

console.log(mySqrt(8));
console.log(mySqrt(6));
console.log(mySqrt(15));
console.log(mySqrt(16));