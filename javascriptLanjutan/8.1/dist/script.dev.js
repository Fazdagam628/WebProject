"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Spread Operator
// Memecah iterables menjadi single element
// const mhs = ["fauzan", "erik", "dodi"];
// console.log(...mhs[0]);
// Menggabungkan 2 array
// const mhs = ["Fauzan", "Email", "Maul"];
// const dosen = ["Totok", "Hendra", "Wanda"];
// const orang = [...mhs, ...dosen];
// const orang = [...mhs, "Raul", ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);
// Meng-copy array
// const mhs = ["Fauzan", "Email", "Maul"];
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs);
// console.log(mhs1);
// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);
var nama = document.querySelector(".nama");

var huruf = _toConsumableArray(nama.textContent).map(function (h) {
  return "<span>".concat(h, "</span>");
}).join("");

nama.innerHTML = huruf;