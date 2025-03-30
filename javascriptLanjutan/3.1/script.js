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

let mahasiswa = ["Fauzan", "Maul", "Erik"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlHuruf: nama.length,
}));
console.table(jumlahHuruf);
