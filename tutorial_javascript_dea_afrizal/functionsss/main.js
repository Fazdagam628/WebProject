// Elemen lingkaran
const lingkaran = document.getElementById("circleJari");
const tombolHasilCircle = document.getElementById("idTombolHasilCircle");
const spanCircle = document.getElementById("resultCircle");
// Elemen Segitiga
const triangleAlas = document.getElementById("triangleAlas");
const triangleTinggi = document.getElementById("triangleTinggi");
const tombolHasilTriangle = document.getElementById("idTombolHasilTriangle");
const spanTriangle = document.getElementById("resultTriangle");
// Elemen Persegi panjang
const rectanglePanjang = document.getElementById("rectanglePanjang");
const rectangleLebar = document.getElementById("rectangleLebar");
const tombolHasilRectangle = document.getElementById("idTombolHasilRectangle");
const spanRectangle = document.getElementById("resultRectangle");
// Elemen jajar genjang
const parallelogramAlas = document.getElementById("parallelogramAlas");
const parallelogramTinggi = document.getElementById("parallelogramTinggi");
const tombolHasilParallelogram = document.getElementById(
  "idTombolHasilParallelogram"
);
const spanParallelogram = document.getElementById("resultParallelogram");
// Elemen gaji karyawan
const salary = document.getElementById("salary");
const day = document.getElementById("day");
const tombolHasilGaji = document.getElementById("idTombolHasilGaji");

tombolHasilCircle.addEventListener("click", hasilCircle);
tombolHasilTriangle.addEventListener("click", hasilTriangle);
tombolHasilRectangle.addEventListener("click", hasilRectangle);
tombolHasilParallelogram.addEventListener("click", hasilParallelogram);
tombolHasilGaji.addEventListener("click", hasilGaji);

function hasilCircle() {
  const nilai = parseFloat(lingkaran.value);
  const total = Math.PI * nilai ** 2;
  spanCircle.textContent = total + " cm";
}

function hasilTriangle() {
  const nilaiAlas = parseFloat(triangleAlas.value);
  const nilaiTinggi = parseFloat(triangleTinggi.value);
  const total = (nilaiAlas * nilaiTinggi) / 2;
  spanTriangle.textContent = total + " cm";
}

function hasilRectangle() {
  const nilaiPanjang = parseFloat(rectanglePanjang.value);
  const nilaiLebar = parseFloat(rectangleLebar.value);
  const total = nilaiPanjang * nilaiLebar;
  spanRectangle.textContent = total + " cm";
}

function hasilParallelogram() {
  const nilaiAlas = parseFloat(parallelogramAlas.value);
  const nilaiTinggi = parseFloat(parallelogramTinggi.value);
  const total = nilaiAlas * nilaiTinggi;
  spanParallelogram.textContent = total + " cm";
}

function hasilGaji() {
  const namaKaryawan = document.getElementById("nameEmployee").value;
  const nilai1 = parseFloat(salary.value);
  const nilai2 = parseFloat(day.value);
  const totalGaji = nilai1 * nilai2;
  if (!namaKaryawan) {
    alert("Nama harus diisi terlebih dahulu");
    return;
  }
  alert(
    `Nama: ${namaKaryawan} berhak mendapatkan gaji sebesar Rp ${totalGaji}`
  );
}
