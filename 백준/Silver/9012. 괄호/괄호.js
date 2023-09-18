const { log } = require("console");

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

for (let i = 1; i <= N; i++) {
  let arr = input[i].split("");

  const count = (arr, needle) => {
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === needle) val++;
    }
    return val;
  };

  if (count(arr, "(") !== count(arr, ")")) {
    console.log("NO");
    continue;
  }

  while (arr.length > 0) {
    let prev = arr.join("");

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === "(" && arr[i + 1] === ")") {
        arr.splice(i, 2);
      }
    }

    if (prev === arr.join("")) {
      console.log("NO");
      break;
    }
  }

  if (arr.length === 0) console.log("YES");
}
