let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input[0];

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;
for (let i = 0; i < input.length; i++) {
  let isMathced = false;
  alphabet.map((val) => {
    if (!isMathced) {
      let isCorrect = true;
      for (let j = 0; j < val.length; j++) {
        if (input[i + j] === undefined || input[i + j] !== val[j]) {
          isCorrect = false;
          break;
        }
      }
      if (isCorrect) {
        count++;
        i += val.length - 1;
        isMathced = true;
      }
    }
  });
  if (!isMathced) count++;
}
console.log(count);
