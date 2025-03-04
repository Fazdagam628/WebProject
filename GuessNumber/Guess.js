let angka_min = 1;
let angka_max = 10;

let angka_acak =
  Math.floor(Math.random() * (angka_max - angka_min + 1)) + angka_min;

let tebakan = prompt(`Masukkan angka antara ${angka_min} dan ${angka_max}`);

if (tebakan == angka_acak) {
  alert(`Selamat,angka yang benar adalah ${angka_acak}`);
} else if (angka_acak < tebakan) {
  alert(
    `Angka yang dimasukkan terlalu besar, angka yang benar adalah ${angka_acak}`
  );
} else if (angka_acak > tebakan) {
  alert(
    `Angka yang dimasukkan terlalu kecil, angka yang benar adalah ${angka_acak}`
  );
} else {
  alert(`Angka yang dimasukkan salah,`);
}
