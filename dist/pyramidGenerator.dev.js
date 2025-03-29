"use strict";

// const character = "#";
// const count = 12;
// const rows = [];
// let inverted = true;
//
// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     character.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }
//
// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }
//
// let result = "";
//
// // for (const row of rows) {
// //   result = result + row + "\n";
// // }
//
// for (let i = 0; i < rows.length; i++) {
//   result += rows[i] + "\n";
// }
//
// console.log(result);
// var s = "";
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
//         for (var i = 15; i > 0; i--) {
//             for (var j = 0; j < i; j++) {
//
//                 s += '*';
//             }
//             s += '\n'
//         }
// console.log(s);
function buatPersegi(panjang, lebar) {
  var hasil = "";

  for (var i = 0; i < lebar; i++) {
    for (var j = 0; j < panjang; j++) {
      hasil += "*";
    }

    hasil += "\n";
  }

  return hasil;
}

console.log(buatPersegi(5, 4));