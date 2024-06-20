#!/usr/bin/node
const a = process.argv[2];
const b = parseInt(a, 10);
let x;
if (isNaN(b)) {
  console.log('Missing number of occurrences');
} else if (b > 0) {
  for (x = 0; x < b; x++) {
    console.log('C is fun');
  }
}
