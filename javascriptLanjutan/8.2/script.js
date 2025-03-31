// Rest Parameter

// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   return myArgs;
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array destructuring
// const kelompok1 = ["sandhika", "maul", "fajar", "hendra", "erik"];
// const [ketua, wakil, ...anggota] = kelompok1;
//
// console.log(anggota);

// Object Destructuring
// const team = {
//   pm: "sandhika",
//   frontEnd1: "doddy",
//   frontEnd2: "erik",
//   backEnd: "Fajar",
//   ux: "Hendra",
//   devOps: "ferry",
// };

// const { pm, ...myTeam } = team;

// console.log(pm);

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("number", 1, 2, "sandhika", false, 10, true, "dody"));
