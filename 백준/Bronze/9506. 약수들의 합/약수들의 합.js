let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");

let i = 0;
while (true) {
  const x = input[i++] * 1;
  if (x === -1) break;
  let sum = 0;
  let arr = [];

  if (x % 2 === 0) {
    for (let j = 1; j < x; j++) {
      if (x % j === 0) {
        arr.push(j);
        sum += j;
      }
    }
  }

  if (sum === x) {
    console.log(`${x} = ${arr.join(" + ")}`);
  } else {
    console.log(`${x} is NOT perfect.`);
  }
}
