"use strict";

var tanya = true;

while (tanya) {
  var generate = Math.floor(Math.random() * 10 + 1);
  var player = prompt("Masukkan angka di antara 1 - 10");
  var guess = 1;
  var hasil = "";

  if (guess === 6) {
    if (player === generate) {
      hasil = "Selamat anda telah memenangkan permainan ini dengan jumlah tebakan ".concat(guess);
    } else if (player < generate) {
      guess++;
      hasil = "Nomor tebakan terlalu kecil";
    } else if (player > generate) {
      guess++;
      hasil = "Nomor tebakan terlalu besar";
    } else if (player > 10 || player < 10) {
      hasil = "Masukkan angka yang sesuai";
    }
  } else {
    hasil = "Anda telah melampaui batas percobaan permainan ini dengan percobaan ".concat(guess);
  }

  alert(hasil);
  tanya = confirm("Main lagi?");
}

alert("Terima kasih sudah bermain");