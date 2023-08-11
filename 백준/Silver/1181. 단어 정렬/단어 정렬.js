let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input[0] * 1;

const aThenB = (a, b) => {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      const code = [a.charCodeAt(i), b.charCodeAt(i)];
      if (code[0] !== code[1]) return code[0] < code[1];
    }
  } else {
    return a.length < b.length;
  }
};

let result = [];
for (let i = 1; i <= T; i++) {
  let j = 0;
  for (; j < result.length; j++) {
    if (input[i] === result[j]) {
      break;
    } else if (aThenB(input[i], result[j])) {
      result.splice(j, 0, input[i]);
      break;
    }
  }
  if (j === result.length) {
    result.push(input[i]);
  }
}
console.log(result.join("\n"));
