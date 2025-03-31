//  HTML Fragments
// const mhs = {
//   nama: "Fauzan",
//   umur: 18,
//   nrp: "6543356",
//   email: "Fauzanmasud628@gmail.com",
// };
//
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// <span class="email">${mhs.email}</span>
// </div>`;

// 2.Looping
// const mhs = [
//   {
//     nama: "Fauzan",
//     email: "Fauzanmasud628@gmail.com",
//   },
//   {
//     nama: "Maul",
//     email: "Maul@gmail.com",
//   },
//   {
//     nama: "Sandi",
//     email: "Sandi@gmail.com",
//   },
// ];
// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//   )
//   .join("")}
// </div>`;

// 3.Conditionals
// ternary
// const lagu = {
//   judul: "Plastic Love",
//   penyanyi: "Mariya Takeuchi",
//   feat: "niki",
// };
//
// const el = `<div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>
// </div>`;

// 4.Nested
// HTML Fragments bersarang
const mhs = {
  nama: "Fauzan",
  semester: 5,
  mataKuliah: [
    "Rekayasa web",
    "Analisis dan perancangan sistem informasi",
    "Pemrograman sistem interaktif",
    "Perancangan sistem berorientasi object",
  ],
};
function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;
