"use strict";

var playerScore = 0;
var computerScore = 0;
var seriScore = 0;
var playerScoreElement = document.querySelector(".score-player");
var computerScoreElement = document.querySelector(".score-computer");
var seriScoreElement = document.querySelector(".score-seri");

function getPilihanComputer() {
  var comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

function updateScore(result) {
  if (result === "MENANG!") {
    playerScore++;
    playerScoreElement.textContent = "Player: ".concat(playerScore);
  } else if (result === "KALAH!") {
    computerScore++;
    computerScoreElement.textContent = "Computer: ".concat(computerScore);
  } else {
    seriScore++;
    seriScoreElement.textContent = "Seri: ".concat(seriScore);
  }
}

function putar() {
  var imgComputer = document.querySelector(".img-computer");
  var gambar = ["gajah", "semut", "orang"];
  var i = 0;
  var waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute("src", "img/".concat(gambar[i++], ".png"));
    if (i == gambar.length) i = 0;
  }, 100);
}

var pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    var pilihanComputer = getPilihanComputer();
    var pilihanPlayer = pil.className;
    var hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      var imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/".concat(pilihanComputer, ".png"));
      var info = document.querySelector(".info");
      info.innerHTML = hasil;
      updateScore(hasil);
    }, 1000);
  });
}); // // Pilihan gajah
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
// // Pilihan orang
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
// // Pilihan semut
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });