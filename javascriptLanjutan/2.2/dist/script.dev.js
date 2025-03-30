// function init() {
//   let nama = "fauzan";
//   return function (nama) {
//     console.log(nama);
//   };
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Fazda");
// panggilNama("maul");
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama},selamat ${waktu}`);
//   };
// }
// ucapkanSalam("Pagi")("Fauzan");
//
// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");
// selamatPagi("Fauzan");
// selamatMalam("Maul")
// console.dir(selamatMalam);
// let add = () => {
//   let counter = 0;
//   return () => {
//     return ++counter;
//   };
// };
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());
// let add = (() => {
//   let counter = 0;
//   return () => {
//     return ++counter;
//   };
// })();
//
// console.log(add());
// console.log(add());
// console.log(add());
"use strict";