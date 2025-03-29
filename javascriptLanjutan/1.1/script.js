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
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama},selamat makan!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   };
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


// 4. Object create()
