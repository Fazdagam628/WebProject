// console.log("Hello World");
const cetakNama = (nama) => `Halo, ${nama}`;

const PI = Math.PI;

const mahasiswa = {
  nama: "Fauzan Masud Ramadhani",
  umur: 18,
  cetakMhs() {
    return `Halo nama saya ${this.nama} dan umur saya ${this.umur}`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, PI, mahasiswa, Orang };
