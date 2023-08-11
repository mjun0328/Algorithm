let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input[0] * 1;
let result = [];
for (let i = 1; i <= T; i++) {
  const [H, W, N] = input[i].split(" ").map((x) => x * 1);
  let room = [1, 1];
  for (let i = 1; i < N; i++) {
    if (room[0] === H) {
      room = [1, room[1] + 1];
    } else {
      room = [room[0] + 1, room[1]];
    }
  }
  result.push(`${room[0]}${room[1].toString().padStart(2, "0")}`);
}
console.log(result.join("\n"));
