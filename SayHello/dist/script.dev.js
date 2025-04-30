"use strict";

var nama = prompt("Nama anda : ");

function getName() {
  setName(nama);
}

function setName(nama) {
  alert("Halo ".concat(nama));
}

getName();