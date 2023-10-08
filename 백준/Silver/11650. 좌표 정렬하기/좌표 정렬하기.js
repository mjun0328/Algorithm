let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map((x) => x * 1));
}

arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

console.log(arr.map((x) => x.join(" ")).join("\n"));
