let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[0] * input[1] * input[2];
let arr = new Array(10).fill(0);

num
  .toString()
  .split("")
  .map((x) => arr[x * 1]++);

console.log(arr.join("\n"));
