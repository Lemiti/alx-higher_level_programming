#!/usr/bin/node

const arr = [];
let a;
let c = 0;
const le = process.argv.length;
for (a = 2; a < le; a++) {
  const d = process.argv[a];
  const num = parseInt(d, 10);
  arr[c] = num;
  c += 1;
}
let k;
let temp;
let j;
for (k = c - 2; k >= 0; k--) {
  temp = arr[k];
  j = k + 1;
  while (temp <= arr[j]) {
    arr[j - 1] = arr[j];
    j += 1;
  }
  arr[j - 1] = temp;
}
if (arr[1] == undefined || arr.length == 1) {
  console.log(0);
} else {
  console.log(arr[1]);
}
