let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input[0];

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[input.length - i - 1]) {
    console.log("0");
    return false;
  }
}
console.log("1");
