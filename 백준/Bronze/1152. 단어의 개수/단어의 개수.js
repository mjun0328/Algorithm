const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = require("fs").readFileSync("input.txt").toString().split("\n");

let arr = input[0].split(" ");
let count = 0;
arr.map((val) => {
  if (val !== "") count++;
});

console.log(count);
