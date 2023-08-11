let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");

const arr = [1, 1, 2, 2, 2, 8];

let result = [];

input[0].split(" ").map((val, i) => {
  result.push(arr[i] - val);
});
console.log(result.join(" "));
