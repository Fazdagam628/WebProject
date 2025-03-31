"use strict";

// for..of
// const mhs = ["fauzan", "maul", "fauzi"];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }
// mhs.forEach((m) => console.log(m));
// for (const m of mhs) {
//   console.log(m);
// }
// String
// const nama = "Fauzan";
// for (const n of nama) {
//   console.log(n);
// }
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }
// NodeList
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach(n => console.log(n.innerHTML))
// arguments
// function jumlahAngka() {
// Tidak bisa dieksekusi
//   return arguments.reduce((a, i) => a + i);
// Tidak bisa dieksekusi
//   arguments.forEach((a) => (jumlah += a));
// Cara yang benar
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));
// for..in
var mhs = {
  nama: "Fauzan",
  umur: 18,
  email: "Fauzanmasud628@gmail.com"
};

for (m in mhs) {
  console.log(mhs[m]);
}