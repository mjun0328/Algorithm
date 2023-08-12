let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let A = input[1]
  .split(" ")
  .map((x) => x * 1)
  .sort((a, b) => a - b);

let result = [];
input[3].split(" ").map((x) => {
  x = x * 1;
  let min = 0;
  let max = input[0] * 1 - 1;
  let mid;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (A[mid] < x) {
      min = mid + 1;
    } else if (A[mid] > x) {
      max = mid - 1;
    } else {
      break;
    }
  }
  result.push(A[mid] === x ? 1 : 0);
});
console.log(result.join("\n"));
