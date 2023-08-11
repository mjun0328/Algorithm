let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;
const [A, B] = input[2].split(" ").map((x) => x * 1);

let count = 0;
input[1].split(" ").map((x) => {
  count += Math.ceil(Math.max(x - A, 0) / B) + 1;
});
console.log(count);
