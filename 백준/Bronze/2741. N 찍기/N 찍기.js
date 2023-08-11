let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;
let arr = new Array(N).fill(0);
arr.map((x, i) => {
  arr[i] = i + 1;
});
console.log(arr.join("\n"));
