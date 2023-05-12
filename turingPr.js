const challenge = (ops) => {
  let temp = [];
  for (let i = 0; i < ops.length; i++ ) {
    let op = ops[i];
    if (!isNaN(op)) {
      temp.push(parseInt(op));
    } else {
      switch (op) {
        case "+":
          temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
          break;
        case "C":
          temp.pop();
          break;
        case "D":
                temp.push(temp[temp.length - 1] * 2);
          break;
      }
    }
  }
  return temp.reduce((acc, current) => acc + current, 0);
}; 

console.log(challenge("5 -2 4 C D 9 + +".split(" ")));
