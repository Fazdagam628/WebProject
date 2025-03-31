"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Rest Parameter
// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   return myArgs;
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));
// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));
// Array destructuring
// const kelompok1 = ["sandhika", "maul", "fajar", "hendra", "erik"];
// const [ketua, wakil, ...anggota] = kelompok1;
//
// console.log(anggota);
// Object Destructuring
// const team = {
//   pm: "sandhika",
//   frontEnd1: "doddy",
//   frontEnd2: "erik",
//   backEnd: "Fajar",
//   ux: "Hendra",
//   devOps: "ferry",
// };
// const { pm, ...myTeam } = team;
// console.log(pm);
// Filtering
function filterBy(type) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return values.filter(function (v) {
    return _typeof(v) === type;
  });
}

console.log(filterBy("number", 1, 2, "sandhika", false, 10, true, "dody"));