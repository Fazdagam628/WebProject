"use strict";

//
var arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
var newArr = arr.map(multi);

function multi(arr) {
  return Math.pow(arr, 3);
}

console.log(newArr);