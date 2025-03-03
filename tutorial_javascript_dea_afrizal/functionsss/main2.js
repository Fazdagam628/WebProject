// function addName() {
//   return "Dani";
// }
// alert(addName);

// function addName(firstName, lastName) {
//   console.log("Nama Depan :", firstName);
//   console.log("Nama Belakang :", lastName);
// }
// addName("Fauzan", "Mas'ud Ramadhani");

// function addName() {
// console.log("Nama Depan :", arguments[0]);
// console.log("Nama Belakang :", arguments[1]);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
//
// addName("Fauzan", "Mas'ud Ramadhani");

// const fullName = function addName(firstName, lastName) {
//   console.log(firstName, lastName);
// };

// const fullName = new Function(
//   "firstname",
//   "lastname",
//   "console.log(firstname,lastname)"
// );

// Cara 1
// const sum = new Function("x", "y", "console.log(x+y)");
// fullName("fauzan", "mas'ud ramadhani");
// sum(5, 6);

// Cara 2
// function sum2(x, y) {
//   if (x + y == 4) {
//     console.log("HI");
//   }
//   console.log(x + y);
// }
// sum2(2, 2);

// Cara 3
// const sum3 = (x, y) => {
//   console.log(x + y);
// };
//
// sum3(3, 5);

function randomize() {
  const randomNumber = Math.random() * 1000;
  if (randomNumber > 200) {
    console.log(" > 200", randomNumber);
  } else {
    console.log(randomNumber);
  }
}

randomize();
