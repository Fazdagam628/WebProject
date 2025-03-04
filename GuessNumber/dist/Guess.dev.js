"use strict";

var angka_min = 1;
var angka_max = 10;
var angka_acak = Math.floor(Math.random() * (angka_max - angka_min + 1)) + angka_min;
var tebakan = prompt("Masukkan angka antara ".concat(angka_min, " dan ").concat(angka_max));

if (tebakan == angka_acak) {
  alert("Selamat,angka yang benar adalah ".concat(angka_acak));
} else if (angka_acak < tebakan) {
  alert("Angka yang dimasukkan terlalu besar, angka yang benar adalah ".concat(angka_acak));
} else if (angka_acak > tebakan) {
  alert("Angka yang dimasukkan terlalu kecil, angka yang benar adalah ".concat(angka_acak));
} else {
  alert("Angka yang dimasukkan salah,");
}