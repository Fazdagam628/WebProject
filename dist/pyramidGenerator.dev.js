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

var result = "";

for (var _i = 0, _rows = rows; _i < _rows.length; _i++) {
  var row = _rows[_i];
  result = result + row + "\n";
}

console.log(result);
console.log(result);
console.log(result);