// Cara membuat object pada javascript
// 1. object literal
// let mahasiswa = {
//   nama: "Fauzan",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama}, selamat makan!`);
//   },
// };
// 2. Function Declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama},selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat tidur!`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan  = methodMahasiswa.makan;
//   mahasiswa.main   = methodMahasiswa.main;
//   mahasiswa.tidur  = methodMahasiswa.tidur;
//   return mahasiswa;
// }
// let fauzan = Mahasiswa("Fauzan", 10);
// let maul = Mahasiswa("Maul", 10);
// 3. Constructor function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama},selamat makan!`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   };
// }
//
// let fauzan = new Mahasiswa("Fauzan", 10);
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
//
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama},Selamat makan!`;
// };
//
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama},Selamat bermain!`;
// };
//
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama},Selamat tidur!`;
// };
//
// let fauzan = new Mahasiswa("Fauzan", 10);
// Versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//
//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama},Selamat makan!`;
//   }
//
//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama},Selamat bermain!`;
//   }
//
//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama},Selamat tidur!`;
//   }
// }
// let fauzan = new Mahasiswa("Fauzan", 10);
"use strict";