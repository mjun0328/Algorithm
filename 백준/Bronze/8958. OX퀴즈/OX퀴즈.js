let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input[0] * 1;
let result = [];
for (let i = 1; i <= T; i++) {
  let stack = 0;
  let score = 0;
  const arr = input[i].split("");
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "O") {
      stack++;
      score += stack;
    } else {
      stack = 0;
    }
  }
  result.push(score);
}
console.log(result.join("\n"));
