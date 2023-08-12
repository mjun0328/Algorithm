let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift() * 1;
let result = [];
for (let i = 0; i < T; i++) {
  let M = input[i * 2].split(" ")[1] * 1;
  let queue = input[i * 2 + 1].split(" ").map((x) => x * 1);
  let count = 0;

  while (queue.length > 0) {
    let w;
    let isSorted = true;
    while (isSorted) {
      w = queue[0];
      isSorted = false;
      for (let i = 1; i < queue.length; i++) {
        if (w < queue[i]) {
          isSorted = true;
          for (let j = 0; j < i; j++) {
            queue.push(queue.shift());
            M = M === 0 ? queue.length - 1 : M - 1;
          }
          break;
        }
      }
    }
    count++;
    if (M === 0) {
      result.push(count);
      break;
    } else {
      queue.shift();
      M -= 1;
    }
  }
}
console.log(result.join("\n"));
