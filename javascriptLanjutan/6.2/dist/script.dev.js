"use strict";

// Destructuring
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);
// const [
//   tambah = "Tidak ada",
//   kurang = "Tidak ada",
//   kali = "Tidak ada",
//   bagi = "Tidak ada",
// ] = kalkulasi(2, 3);
// console.log(bagi);
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
//
// const { bagi, kali, kurang, tambah } = kalkulasi(4, 5);
// console.log(kurang);
// Destructuring function arguments
var mhs1 = {
  nama: "Fauzan",
  umur: 18,
  email: "Fauzanmasud628@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75
  }
}; // function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama},saya berumur ${umur} tahun`;
// }
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama},saya berumur ${mhs.umur} tahun`;
// }
//
// console.log(cetakMhs(mhs1));

function cetakMhs(_ref) {
  var nama = _ref.nama,
      umur = _ref.umur,
      _ref$nilai = _ref.nilai,
      tugas = _ref$nilai.tugas,
      uts = _ref$nilai.uts,
      uas = _ref$nilai.uas;
  return "Halo, nama saya ".concat(nama, ",saya berumur ").concat(umur, " tahun. nilai uas saya ").concat(uas);
}

console.log(cetakMhs(mhs1));