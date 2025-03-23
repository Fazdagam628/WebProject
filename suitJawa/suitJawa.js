var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih: gajah, semut, orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();
  // console.log(comp);

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // console.log(comp);
  // menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG";
    //   } else {
    //     hasil = "KALAH";
    //   }
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    //   if (comp == "gajah") {
    //     hasil = "KALAH";
    //   } else {
    //     hasil = "MENANG";
    //   }
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    //   if (comp == "orang") {
    //     hasil = "KALAH";
    //   } else {
    //     hasil = "MENANG";
    //   }
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "Input salah,silahkan masukkan input yang sesuai";
  }

  // tampilkan halaman hasil
  alert(`Kamu memilih: ${p}\nKomputer memilih: ${comp}\nHasil: ${hasil}`);

  tanya = confirm("Main lagi?");
}

alert("terima kasih sudah bermain");
