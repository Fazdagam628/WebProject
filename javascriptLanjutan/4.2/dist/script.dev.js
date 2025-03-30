"use strict";

var angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]; // Filter
// Mencari angka >= 3
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka.sort((a, b) => a - b));
// Map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);
// console.log(angka);
// reduce
// Jumlahkan seluruh elemen pada array
// function sum(angka) {
//   sum = 0;
//   for (let i = 0; i < angka.length; i++) {
//     sum += angka[i];
//   }
//   return sum;
// }
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
//
// console.log(newAngka);
// console.log(sum(angka));
// Method Chaining
// Cari angka > 5
// kalikan 3
// Jumlah

var hasil = angka.filter(function (a) {
  return a > 5;
}).map(function (a) {
  return a * 3;
}).reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(hasil);