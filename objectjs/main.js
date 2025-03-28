// var siswa = {
//   nama: "Fauzan",
//   umur: 18,
//   nilai: [87, 90, 91, 86],
//   alamat: {
//     desa: "Keji",
//     kota: "Ungaran Barat",
//     provinsi: "Jawa Tengah",
//   },
//   average: function () {
//     var total = 0;
//     for (var i = 0; i < this.nilai.length; i++) {
//       total += this.nilai[i];
//     }
//     return total / this.nilai.length;
//   },
//   tampil: function () {
//     var average = this.average();
//     console.log(
//       `Hai,nama saya ${this.nama} dan umur saya adalah ${this.umur}.Rata rata saya adalah ${average}.Alamat rumah saya berada di desa ${this.alamat.desa}, Kota ${this.alamat.kota} , Provinsi ${this.alamat.provinsi}`
//     );
//   },
// };
//
// var mhs = {
//   nama: "Dodi",
//   nrp: "12546852186",
//   email: "dodi@gmail.com",
//   jurusan: "Teknik Informatika",
// };
// var mhs2 = {
//   nama: "danu",
//   nrp: "1254789543",
//   email: "danu@gmail.com",
//   jurusan: "Teknik Industri",
// };
//
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
//
// var mhs3 = buatObjectMahasiswa(
//   "Pandro",
//   "12386635654",
//   "Pandro@gmail.com",
//   "Teknik Mesin"
// );
//
// // Constructor
// function Mahasiswa(nama, nrp, email, jurusan) {
//   // var this = {};
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
//   // return this;
// }
//
// var mhs4 = new Mahasiswa(
//   "Joni",
//   "5648231",
//   "Joni@gmail.com",
//   "Teknik Komunikasi"
// );

// Membuat object

// cara 1 - function declaration
// function halo() {
//   console.log("halo");
// }
// halo();

// Cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//   console.log("halo");
// };
//
// obj.halo();

// Cara 3 - constructor
// function Halo() {
//   console.log("halo");
// }
// new Halo();
// var halo = new Halo();
// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------->
// this
// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();
// this mengembalikan object global

// Cara 2 - object literal
// var obj = { a: 10, nama: "fauzan" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
//
// obj.halo();
// this mengembalikan object yang bersangkutan

// Cara 3 - constructor
// function Halo() {
//   console.log(this);
//   console.log("halo");
// }
// new Halo();
// var obj1 = new Halo();
// this mengembalikan object yang baru dibuat

// Membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Angkot masih kosong");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Maul", ["Ungaran", "Unnes"], [], 0);
var angkot2 = new Angkot("Michael Jackson", ["Terboyo", "Banyumanik"], [], 0);
