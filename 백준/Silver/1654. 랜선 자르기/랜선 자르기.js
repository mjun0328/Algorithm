let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input
  .shift()
  .split(" ")
  .map((x) => x * 1);
input = input.map((x) => x * 1);
let min = 1;
let max = Math.max(...input);

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = input.map((x) => Math.floor(x / mid)).reduce((a, b) => a + b, 0);
  if (count >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
