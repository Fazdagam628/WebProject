// const coba = ["satu", "dua", "tiga"];

// const [a, b, c] = coba;
// console.log(a); // "satu"
// console.log(b); // "dua"
// console.log(c); // "tiga"

// Destructuring variable / assignment

// Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Fauzan"];
// const salam = perkenalan[0];
// console.log(salam);

// const [salam, satu, dua, tiga] = perkenalan;
// const [salam, , , tiga] = perkenalan;
// console.log(tiga);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b ] = [b, a];
//
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "Fauzan",
//   umur: 18,
// };
// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa declaration object
// ({ nama, umur } = { nama: "Fauzan", umur: 18 });
// console.log(nama);

//Assign ke variable baru

// const mhs = {
//   nama: "Fauzan",
//   umur: 18,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//   nama: "Fauzan",
//   umur: 18,
//     email: "fauzanmasud628@gmail.com",
// };
// const { nama, umur, email = "emaildefault@gmail.com" } = mhs;
// console.log(email);

// memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Fauzan",
//   umur: 18,
//   email: "fauzanmasud628@gmail.com",
// };
// const { nama: n, umur: u, email: e = "emaildefault@gmail.com" } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: "Fauzan",
//   umur: 18,
//   email: "fauzanmasud628@gmail.com",
// };
// const { nama, ...values } = mhs;
// console.log(values.email);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Fauzan",
  umur: 18,
  email: "Fauzanmasud628@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
