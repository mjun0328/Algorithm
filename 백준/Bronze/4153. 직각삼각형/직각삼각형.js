let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;
while (input[i] !== "0 0 0") {
  let len = input[i].split(" ").map((x) => x * 1);
  let longest = Math.max(...len);
  console.log(
    len.reduce((acc, val) => acc + val ** 2, 0) - longest ** 2 === longest ** 2
      ? "right"
      : "wrong"
  );
  i++;
}
