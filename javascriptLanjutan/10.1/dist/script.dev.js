"use strict";

// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo,${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt(`Masukkan Nama :`);
//   callback(nama);
// }
//
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));
//
// const mhs = [
//   {
//     nama: "fauz",
//     nrp: "0892323",
//     email: "Fauan@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenwali: 1,
//   },
//   {
//     nama: "Erik",
//     nrp: "0892323",
//     email: "Fauan@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenwali: 2,
//   },
//   {
//     nama: "maul",
//     nrp: "0892323",
//     email: "Fauan@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenwali: 3,
//   },
// ];
//
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 100000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");
// Asynchronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.response === 404) {
//         error();
//       }
//     }
//   };
//
//   xhr.open("get", url);
//   xhr.send();
// }
//
// console.log("Mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => {
//       return console.log(m.nama);
//     });
//   },
//   () => {}
// );
//
// console.log("Selesai");
// JQuery
var userId = 8;
console.log("Mulai");
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users/",
  success: function success(res) {
    res.forEach(function (r) {
      return console.log(r);
    });
  },
  error: function error(e) {
    return console.log(e.responseText);
  }
});
console.log("Selesai");