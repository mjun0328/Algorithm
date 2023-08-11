let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(" ").map((x) => x * 1);

let isAscending = true;
for (let i = 0; i < 8; i++) {
  if (arr[i] !== i + 1) {
    isAscending = false;
    break;
  }
}
if (isAscending) {
  console.log("ascending");
  return true;
}

let isDescending = true;
for (let i = 0; i < 8; i++) {
  if (arr[i] !== 8 - i) {
    isDescending = false;
    break;
  }
}
if (isDescending) {
  console.log("descending");
  return true;
} else {
  console.log("mixed");
}
