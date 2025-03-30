"use strict";

// Function Expression
// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// };
//
// console.log(tampilNama("fauzan"));
// const tampilNama = (nama) => {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama("fauzan"));
// const tampilNama = (nama, waktu) => {
//   return `Halo ${nama}, selamat ${waktu}`;
// };
//
// console.log(tampilNama("Fauzan", "Pagi"));
// const tampilNama = (nama) => `Halo ${nama}`;
// console.log(tampilNama("Fauzan"));
// const tampilNama = () => `Hello world`;
// console.log(tampilNama());
// let a = [33, 25, 16, 67, 78, 59, 32, 11, 24];
// a.sort(function (a, b) {
//   return a - b;
// });
// console.log(a);
// let mahasiswa = ["Fauzan", "Maul", "Erik"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);
// Konsep this pada Arrow Function
// constructor function
// const Mahasiswa = function () {
//   this.nama = "Fauzan";
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama} ,umur saya ${this.umur} tahun`);
//   };
// };
// const fauzan = new Mahasiswa();
// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Fauzan";
//   this.umur = 17;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };
// };
//
// const fauzan = new Mahasiswa();
// const mhs1 = {
//   nama: "Fauzan",
//   umur: 33,
//   sayHello: () => {
// console.log(`Halo,nama saya ${this.nama},umur saya ${this.umur} tahun`);
//   },
// };
// const Mahasiswa = function () {
//   this.nama = "Fauzan";
//   this.umur = 18;
//   this.sayHello = function () {
//     console.log(`Halo,nama saya ${this.nama},umur saya ${this.umur} tahun`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const fauzan = new Mahasiswa();
var box = document.querySelector(".box");
box.addEventListener("click", function () {
  var _this = this;

  var satu = "size";
  var dua = "caption";

  if (this.classList.contains(satu)) {
    var _ref = [dua, satu];
    satu = _ref[0];
    dua = _ref[1];
  }

  this.classList.toggle(satu);
  setTimeout(function () {
    _this.classList.toggle(dua);
  }, 600);
});