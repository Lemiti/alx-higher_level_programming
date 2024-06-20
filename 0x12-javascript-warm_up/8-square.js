#!/usr/bin/node

const a = process.argv[2];
const b = parseInt(a, 10);
let x;
let y;
if (isNaN(b)) {
  console.log('Missing size');
} else if (b > 0) {
  for (x = 0; x < b; x++) {
    for (y = 0; y < b; y++) {
      process.stdout.write('X');
    }
    console.log('');
  }
}
