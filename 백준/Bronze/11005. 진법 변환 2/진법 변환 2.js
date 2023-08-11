let input = require("fs").readFileSync("/dev/stdin").toString().split("\n")[0];
// let input = require("fs").readFileSync("input.txt").toString().split("\n")[0];

let char = [];
let [decimal, sys] = input.split(" ").map((x) => x * 1);
const numToChar = (num) =>
  num >= 10 ? String.fromCharCode(num + 55) : num.toString();

while (true) {
  let rest = decimal % sys;
  decimal = (decimal - rest) / sys;
  char.unshift(numToChar(rest));
  // console.log(decimal, rest, sys);
  if (decimal === 0) break;
}

console.log(char.join(""));
