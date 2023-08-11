let max = 0;
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => {
    const arr = x.split("");
    if (arr.length > max) max = arr.length;
    return arr;
  });
// let input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .split("\n")
//   .map((x) => {
//     const arr = x.split("");
//     if (arr.length > max) max = arr.length;
//     return arr;
//   });

let str = "";
for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j].length > i) str += input[j][i];
  }
}
console.log(str);
