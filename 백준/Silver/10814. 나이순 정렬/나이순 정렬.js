let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0] * 1;

let users = new Array();
users.length = 200;
for (let i = 0; i < 200; i++) {
  users[i] = new Array();
}

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(" ").map((x, i) => (i === 0 ? x * 1 : x));
  users[age - 1].push(name);
}

for (let i = 0; i < 200; i++) {
  for (let j = 0; j < users[i].length; j++) {
    console.log(`${i + 1} ${users[i][j]}`);
  }
}
