#!/usr/bin/node
const a = process.argv[2];
const b = parseInt(a, 10);
if (isNaN(b)) {
  console.log(1);
} else {
  function factorial (b) {
    if (b <= 1) {
      return 1;
    } else {
      return b * factorial(b - 1);
    }
  }
  console.log(factorial(b));
}
