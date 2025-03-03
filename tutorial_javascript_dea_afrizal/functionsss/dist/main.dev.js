"use strict";

// Elemen lingkaran
var lingkaran = document.getElementById("circleJari");
var tombolHasilCircle = document.getElementById("idTombolHasilCircle");
var spanCircle = document.getElementById("resultCircle"); // Elemen Segitiga

var triangleAlas = document.getElementById("triangleAlas");
var triangleTinggi = document.getElementById("triangleTinggi");
var tombolHasilTriangle = document.getElementById("idTombolHasilTriangle");
var spanTriangle = document.getElementById("resultTriangle"); // Elemen Persegi panjang

var rectanglePanjang = document.getElementById("rectanglePanjang");
var rectangleLebar = document.getElementById("rectangleLebar");
var tombolHasilRectangle = document.getElementById("idTombolHasilRectangle");
var spanRectangle = document.getElementById("resultRectangle"); // Elemen jajar genjang

var parallelogramAlas = document.getElementById("parallelogramAlas");
var parallelogramTinggi = document.getElementById("parallelogramTinggi");
var tombolHasilParallelogram = document.getElementById("idTombolHasilParallelogram");
var spanParallelogram = document.getElementById("resultParallelogram"); // Elemen gaji karyawan

var salary = document.getElementById("salary");
var day = document.getElementById("day");
var tombolHasilGaji = document.getElementById("idTombolHasilGaji");
tombolHasilCircle.addEventListener("click", hasilCircle);
tombolHasilTriangle.addEventListener("click", hasilTriangle);
tombolHasilRectangle.addEventListener("click", hasilRectangle);
tombolHasilParallelogram.addEventListener("click", hasilParallelogram);
tombolHasilGaji.addEventListener("click", hasilGaji);

function hasilCircle() {
  var nilai = parseFloat(lingkaran.value);
  var total = Math.PI * Math.pow(nilai, 2);
  spanCircle.textContent = total + " cm";
}

function hasilTriangle() {
  var nilaiAlas = parseFloat(triangleAlas.value);
  var nilaiTinggi = parseFloat(triangleTinggi.value);
  var total = nilaiAlas * nilaiTinggi / 2;
  spanTriangle.textContent = total + " cm";
}

function hasilRectangle() {
  var nilaiPanjang = parseFloat(rectanglePanjang.value);
  var nilaiLebar = parseFloat(rectangleLebar.value);
  var total = nilaiPanjang * nilaiLebar;
  spanRectangle.textContent = total + " cm";
}

function hasilParallelogram() {
  var nilaiAlas = parseFloat(parallelogramAlas.value);
  var nilaiTinggi = parseFloat(parallelogramTinggi.value);
  var total = nilaiAlas * nilaiTinggi;
  spanParallelogram.textContent = total + " cm";
}

function hasilGaji() {
  var namaKaryawan = document.getElementById("nameEmployee").value;
  var nilai1 = parseFloat(salary.value);
  var nilai2 = parseFloat(day.value);
  var totalGaji = nilai1 * nilai2;

  if (!namaKaryawan) {
    alert("Nama harus diisi terlebih dahulu");
    return;
  }

  alert("Nama: ".concat(namaKaryawan, " berhak mendapatkan gaji sebesar Rp ").concat(totalGaji));
}