"use strict";

// const close = document.querySelector(".close");
//
// close.addEventListener("click", function () {
//   close.parentNode.remove();
// });
// // ------------------------------------------------------
// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");
//
// close.addEventListener("click", function () {
//   card.style.display = "none";
// });
// DOM Traversal
// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // card[i].style.display = "none";
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// });
// close.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });
//
// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });
var container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});