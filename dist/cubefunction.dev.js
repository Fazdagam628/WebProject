"use strict";

// function hitungPanjangSisi(sisiPanjang) {
//   return Math.pow(sisiPanjang, 3);
//   return sisiPanjang ** 3;
// }
// function hitungPanjangSisi(sisiPanjang1, sisiPanjang2) {
//   volume1 = Math.pow(sisiPanjang1, 3);
//   volume2 = Math.pow(sisiPanjang2, 3);
//   // return sisiPanjang ** 3;
//   return volume1 + volume2;
// }
// const hitungPanjangSisi = (sisiPanjang) => Math.pow(sisiPanjang, 3);
// console.log(hitungPanjangSisi(3, 3));
// function cetakAngka(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   cetakAngka(n - 1);
// }
//
// cetakAngka(10);
// function faktorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * faktorial(n - 1);
// }
// function faktorial(n) {
//   var hasil = 1;
//
//   for (var i = n; n > 0; i--) {
//     hasil *= i;
//   }
//   return hasil;
// }
// console.log(faktorial(10));
//
// var arr = ["fazda", "maul", "galih","fitma","sigma"];
//
// for (var i = 0; i < arr.length; i++) {
// console.log("mahasiswa ke = " + i + arr[i]);
// console.log(`Mahasiswa ${arr[i]} ke ${i}`);
// }
// console.log(arr);
// arr.push("seno");
// console.log(arr.join(" "));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log("<-------------------->");
// console.log(arr);
// console.log(arr.unshift("ganesh"));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log("<-------------------->");
// arr.splice(2, 0, "fatur");
// console.log(arr.join(" - "));
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var nama = ["fazda", "maul", "galuh", "sandi"];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// var cetak = function (e) {
//   console.log(e);
// };
// angka.forEach(cetak);
// angka.forEach(function (e) {
//   console.log(e);
// });
// angka.forEach((e) => {
//   console.log(e);
// });
// nama.forEach(function (e, index) {
//   console.log(
//     `Mahasiswa ke = ${index + 1},\nadalah : ${e}\n----------------------`
//   );
// });
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
//
// console.log(angka2.join(" - "));
var angka = [2, 5, 1, 8, 9, 5, 10, 3, 28, 16, 19]; // console.log(angka.join(" - "));
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

var angka2 = angka.filter(function (e) {
  // return e == 5;
  return e == 10;
}); // var angka2 = angka.find(function (e) {
//   return e > 5;
// });

console.log(angka2);