// // DOM Selection
// // document.getElementById()
// const judul = document.getElementById("judul");
//
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Fauzan";
//
// // document.getElementsByTagName
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
//
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";
//
// // document.getElementsByClassName()
// //  -> HTMLCollection
// // const p1 = document.getElementsByClassName("p1");
// const p1 = document.getElementsByClassName("p1")[0];
// // p1[0].innerHTML = "ini diubah dari javascript";
// p1.innerHTML = "ini diubah dari javascript";
// document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";
// const p = document.querySelector("p");
// p.innerHTML = "Ini diubah melalui javascript";
// const p = document.querySelectorAll("p");
// p[0].innerHTML = "Ini diubah melalui javascript";
// for (let i = 0; i < p.length; i++) {
//   if (i % 2 == 0) {
//     p[i].style.backgroundColor = "#ddd";
//   } else {
//     p[i].style.backgroundColor = "lightblue";
//   }
// }
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "orange";
// function count(a) {
//   for (let i = 0; i <= 90000; i++) {
//     if (a == [i]) {
//       console.log(`Nomer kamu ${[i]}`);
//     }
//   }
// }
// count(7800);
"use strict";