// const cetakNama = (nama) => `Halo, ${nama}`;
// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); //local module
// const moment = require("moment"); //third party module // NPM module // node_modules

const coba = require("./coba");

// console.log(cetakNama("Dani"));
console.log(
  coba.cetakNama("Dani"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
