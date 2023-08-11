let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.split(" "));
// let input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .split("\n")
//   .map((x) => x.split(" "));

let x,
  y,
  max = -1;
for (let i = 0; i < input.length; i++) {
  input[i].map((val, j) => {
    if (max < val * 1) {
      max = val * 1;
      x = i;
      y = j;
    }
  });
}

console.log(max + "\n" + (x + 1) + " " + (y + 1));
