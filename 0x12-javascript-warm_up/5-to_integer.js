#!/usr/bin/node

const a = process.argv[2];
const b = parseInt(a, 10);
if (isNaN(b)) {
  console.log('Not a number');
} else {
  console.log('My number:', process.argv[2]);
}
