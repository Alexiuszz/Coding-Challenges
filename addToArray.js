var addToArrayForm = function (num, k) {
  let nS = "";
  for (let i = 0; i < num.length; i++) {
    nS = nS.concat(num[i].toString());
  }
  const newNum = BigInt(nS) + BigInt(k);

  let numS = newNum.toString();
  let result = [];
  for (let i = 0; i < numS.length; i++) {
    result.push(parseInt(numS[i]));
  }
  return result;
};

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
