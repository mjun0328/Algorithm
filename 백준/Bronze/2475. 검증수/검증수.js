let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
const arr = input[0].split(" ").map((x) => {
  sum += x ** 2;
});
console.log(sum % 10);
