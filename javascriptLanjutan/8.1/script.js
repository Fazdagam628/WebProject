// Spread Operator
// Memecah iterables menjadi single element

// const mhs = ["fauzan", "erik", "dodi"];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ["Fauzan", "Email", "Maul"];
// const dosen = ["Totok", "Hendra", "Wanda"];
// const orang = [...mhs, ...dosen];
// const orang = [...mhs, "Raul", ...dosen];
// const orang = mhs.concat(dosen);

// console.log(orang);

// Meng-copy array
// const mhs = ["Fauzan", "Email", "Maul"];
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
