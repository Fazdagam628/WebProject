"use strict";

var character = "|";
var count = 12;
var rows = [];
var inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (var i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

var result = ""; // for (const row of rows) {
//   result = result + row + "\n";
// }

for (var _i = 0; _i < rows.length; _i++) {
  result += rows[_i] + "\n";
}

console.log(result);