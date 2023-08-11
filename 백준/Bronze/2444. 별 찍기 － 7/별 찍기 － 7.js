let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input[0] * 1;

const print = (count) => {
  let str = "";
  for (let i = 0; i < (max - count) / 2; i++) {
    str += " ";
  }
  for (let i = 0; i < count; i++) {
    str += "*";
  }
  return str + "\n";
};

let max = input * 2 - 1;
let result = "";
for (let i = 1; i <= max; i += 2) result += print(i);
for (let i = max - 2; i >= 1; i -= 2) result += print(i);
console.log(result);
