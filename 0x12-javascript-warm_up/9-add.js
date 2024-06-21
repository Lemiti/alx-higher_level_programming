#!/usr/bin/node

const a = process.argv[2];
const a1 = process.argv[3];
const b = parseInt(a, 10);
const b1 = parseInt(a1, 10);

function add (b1, b) {
  if (isNaN(b) || isNaN(b1)) {
    console.log('NaN');
  } else {
    console.log(b1 + b);
  }
}
add(b1, b);
