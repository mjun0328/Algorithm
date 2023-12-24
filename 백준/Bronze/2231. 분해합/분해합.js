let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input[0] * 1;

const solution = (input) => {
  for (let i = 0; i < input; i++) {
    const str = i.toString();
    const arr = [];
    for (let j = 0; j < str.length; j++) arr.push(str[j]);
    const sum = str
      .split("")
      .map((x) => x * 1)
      .reduce((acc, curr) => acc + curr);
    if (sum + i === input) return i;
  }
  return 0;
};

console.log(solution(input));
