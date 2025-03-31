// Destructuring
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[2];

// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [
//   tambah = "Tidak ada",
//   kurang = "Tidak ada",
//   kali = "Tidak ada",
//   bagi = "Tidak ada",
// ] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, kali, kurang, tambah } = kalkulasi(4, 5);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "Fauzan",
  umur: 18,
  email: "Fauzanmasud628@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama},saya berumur ${umur} tahun`;
// }
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama},saya berumur ${mhs.umur} tahun`;
// }
//
// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama},saya berumur ${umur} tahun. nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1));
