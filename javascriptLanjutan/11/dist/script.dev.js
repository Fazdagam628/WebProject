"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=93131efd&s=avengers",
//   success: (movies) => console.log(movies),
// });
// const movies = fetch("http://www.omdbapi.com/?apikey=93131efd&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));
// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchrinous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)
// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("janji telah ditolak!");
//   }
// });
//
// janji1
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("Not OK : " + response));
// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });
// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("Selesai menunggu"))
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("Not OK : " + response));
// console.log("selesai");
// Promise.all()
var film = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([{
      judul: "Avengers",
      sutradara: "Sandhika",
      pemeran: "Maul,erik"
    }, {
      judul: "Avengers",
      sutradara: "Sandhika",
      pemeran: "Maul,erik"
    }]);
  }, 1000);
});
var cuaca = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([{
      kota: "Bandung",
      temp: 26,
      kondisi: "Cerah Berawan"
    }]);
  }, 500);
}); // film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));
// eksekusi kode secara bersama

Promise.all([film, cuaca]) // .then((response) => console.log(response));
.then(function (response) {
  var _response = _slicedToArray(response, 2),
      film = _response[0],
      cuaca = _response[1];

  console.log(film);
  console.log(cuaca);
});