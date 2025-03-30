"use strict";

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE
// var nama = "fauzan";
// console.log(nama);
// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = volume
// execcution phase
// var nama = "fauzan";
// var umur = 33;
// console.log(sayHello());
//
// function sayHello() {
//   return `Halo,nama saya ${nama},dan umur saya ${umur}`;
// }
// sayHello();
// function membuat local execution context
//yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// var nama = "fauzan";
// var username = "@fazdagam";
//
// function cetakURL(username) {
//   var instagramURL = "http://instagram.com";
//   return instagramURL + username;
// }
//
// console.log(cetakURL("@maul"));
// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();
function satu() {
  var nama = "fauzan";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("dodi");
console.log(nama);