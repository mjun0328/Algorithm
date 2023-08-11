let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];
for (let i = 0; i < input.length - 1; i++) {
  const str = input[i];
  let isPalindrome = true;
  for (let j = 0; j < Math.floor(str.length / 2); j++) {
    if (str[j] !== str[str.length - j - 1]) {
      isPalindrome = false;
      break;
    }
  }
  result.push(isPalindrome);
}

console.log(result.map((x) => (x ? "yes" : "no")).join("\n"));
