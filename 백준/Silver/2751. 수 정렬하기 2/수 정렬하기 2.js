let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
input.splice(0, 1).map((x) => x * 1);

input.sort((a, b) => a - b);

console.log(input.join("\n"));
