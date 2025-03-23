"use strict";

var tanya = true;
var generate = Math.floor(Math.random() * 10 + 1);
var guess = 1;

while (tanya) {
  guess = 1;
  var player = prompt("Masukkan angka di antara 1 - 10");
  var hasil = "";

  if (guess > 6) {
    if (player == generate) {
      hasil = "Selamat anda telah memenangkan permainan ini dengan jumlah tebakan ".concat(guess);
      guess = 1;
    } else if (player < generate) {
      guess++;
      hasil = "Nomor tebakan terlalu kecil";
    } else {
      guess++;
      hasil = "Nomor tebakan terlalu besar";
    }
  } else {
    hasil = "Anda telah melampaui batas percobaan permainan ini dengan percobaan ".concat(guess);
  }

  alert(hasil);
  tanya = confirm("Main lagi?");
  console.log(generate);
  console.log(guess);
}

alert("Terima kasih sudah bermain");