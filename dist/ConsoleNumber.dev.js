"use strict";

function count(n) {
  for (var i = 0; i < 100000; i++) {
    if (n === i) {
      console.log("Nomor anda ".concat(i));
    }
  }
}

count(10);