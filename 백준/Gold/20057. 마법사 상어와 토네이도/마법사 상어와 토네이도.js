let input = require("fs")
  // .readFileSync("input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = [];
const N = input[0] * 1;
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map((x) => x * 1));
}

let dir = 0;
const updateDir = () => {
  dir = dir === 3 ? 0 : dir + 1;
};

let out = 0;
const setSand = (alpha, posX, posY, percent) => {
  let amount = Math.floor((arr[y][x] * percent) / 100);
  if (posX < 0 || posX >= N || posY < 0 || posY >= N) {
    out += amount;
  } else {
    arr[posY][posX] += amount;
  }
  return alpha - amount;
};

const setAlpha = (alpha, posX, posY) => {
  if (posX < 0 || posX >= N || posY < 0 || posY >= N) {
    out += alpha;
  } else {
    arr[posY][posX] += alpha;
  }
};

let x = (y = (N - 1) / 2);

let step = 1;
let desX, desY;
while (x > 0 || y > 0) {
  for (let i = 0; i < 2; i++) {
    switch (dir) {
      case 0:
        [desX, desY] = [x - step, y];
        break;
      case 1:
        [desX, desY] = [x, y + step];
        break;
      case 2:
        [desX, desY] = [x + step, y];
        break;
      case 3:
        [desX, desY] = [x, y - step];
        break;
    }

    while (true) {
      let alpha;
      if (dir === 0) {
        x -= 1;
        alpha = arr[y][x];
        alpha = setSand(alpha, x - 2, y, 5);
        alpha = setSand(alpha, x - 1, y + 1, 10);
        alpha = setSand(alpha, x, y + 1, 7);
        alpha = setSand(alpha, x + 1, y + 1, 1);
        alpha = setSand(alpha, x, y + 2, 2);
        alpha = setSand(alpha, x - 1, y - 1, 10);
        alpha = setSand(alpha, x, y - 1, 7);
        alpha = setSand(alpha, x + 1, y - 1, 1);
        alpha = setSand(alpha, x, y - 2, 2);
        setAlpha(alpha, x - 1, y);
      } else if (dir === 1) {
        y += 1;
        alpha = arr[y][x];
        alpha = setSand(alpha, x, y + 2, 5);
        alpha = setSand(alpha, x - 1, y + 1, 10);
        alpha = setSand(alpha, x - 1, y, 7);
        alpha = setSand(alpha, x - 1, y - 1, 1);
        alpha = setSand(alpha, x - 2, y, 2);
        alpha = setSand(alpha, x + 1, y + 1, 10);
        alpha = setSand(alpha, x + 1, y, 7);
        alpha = setSand(alpha, x + 1, y - 1, 1);
        alpha = setSand(alpha, x + 2, y, 2);
        setAlpha(alpha, x, y + 1);
      } else if (dir === 2) {
        x += 1;
        alpha = arr[y][x];
        alpha = setSand(alpha, x + 2, y, 5);
        alpha = setSand(alpha, x + 1, y + 1, 10);
        alpha = setSand(alpha, x, y + 1, 7);
        alpha = setSand(alpha, x - 1, y + 1, 1);
        alpha = setSand(alpha, x, y + 2, 2);
        alpha = setSand(alpha, x + 1, y - 1, 10);
        alpha = setSand(alpha, x, y - 1, 7);
        alpha = setSand(alpha, x - 1, y - 1, 1);
        alpha = setSand(alpha, x, y - 2, 2);
        setAlpha(alpha, x + 1, y);
      } else if (dir === 3) {
        y -= 1;
        alpha = arr[y][x];
        alpha = setSand(alpha, x, y - 2, 5);
        alpha = setSand(alpha, x - 1, y - 1, 10);
        alpha = setSand(alpha, x - 1, y, 7);
        alpha = setSand(alpha, x - 1, y + 1, 1);
        alpha = setSand(alpha, x - 2, y, 2);
        alpha = setSand(alpha, x + 1, y - 1, 10);
        alpha = setSand(alpha, x + 1, y, 7);
        alpha = setSand(alpha, x + 1, y + 1, 1);
        alpha = setSand(alpha, x + 2, y, 2);
        setAlpha(alpha, x, y - 1);
      }
      arr[y][x] = 0;
      if (x === 0 && y === 0) {
        console.log(out);
        return false;
      } else if (desX === x && desY === y) {
        break;
      }
    }
    updateDir();
  }
  step++;
}
