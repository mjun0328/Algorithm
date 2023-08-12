let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift() * 1;
input = input.map((x) => x * 1);
let array = new Array(N).fill(0).map((x, i) => i + 1);
let stack = [];

let result = [];
for (let i = 0; i < N; i++) {
  if (stack.length > 0 && stack[stack.length - 1] === input[i]) {
    result.push(false);
    stack.pop();
  } else if (array.includes(input[i])) {
    while (array[0] !== input[i]) {
      result.push(true);
      stack.push(array.shift());
    }
    result.push(true);
    stack.push(array.shift());
    result.push(false);
    stack.pop();
  } else {
    result = [];
    console.log("NO");
    break;
  }
}

if (result.length > 0) {
  console.log(result.map((x) => (x ? "+" : "-")).join("\n"));
}
