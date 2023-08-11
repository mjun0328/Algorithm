let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = 666;
let i = 1;
while (i < input[0] * 1) {
  if ((++result).toString().includes("666")) i++;
}
console.log(result);
