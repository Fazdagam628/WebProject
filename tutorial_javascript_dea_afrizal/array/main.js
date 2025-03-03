// const array = ["😂", "🗿", "😍", "😎"];
// array[4] = "array ke 4";
// array[5] = "array ke 5";
// array[6] = "array ke 6";
// array[7] = "array ke 7";
// console.log(array);

// const arrayKita = new Array();
// arrayKita[0] = "array ke 1";
// arrayKita[1] = "array ke 2";
// arrayKita[2] = "array ke 3";

// console.log(arrayKita);

// const arraySaya = ["🥕", "🥑", "🌶️", "🥒"];
// length = 4

// const pepper = arraySaya.includes("🌶️");

// console.log(pepper);
// console.log(posisiPepper);
// if (pepper) {
//   const positionPepper = arraySaya.indexOf("🌶️");
//   const indexBefore = positionPepper - 1;
//   const indexAfter = positionPepper + 1;
//   const before = arraySaya[indexBefore];
//   const after = arraySaya[indexAfter];
// const buahAwal = arraySaya[0];
//   const buahAwal = arraySaya.shift();
//   const buahAkhir = arraySaya[arraySaya.length - 1];
//   console.log(`Sayur sebelum cabai adalah ${before}`);
//   console.log(`Sayur setelah cabai adalah ${after}`);
//   console.log(`Buah awal adalah ${buahAwal}`);
//   console.log(`Buah akhir adalah ${buahAkhir}`);
//   console.log(`Pepper is located in index of ${positionPepper}`);
// } else {
//   console.log("There is no pepper in here");
// }

// const arraySaya = [];
//
// arraySaya["alpukat"] = "🥑";
// arraySaya["jeruk"] = "🟠";
//
// console.log(arraySaya["jeruk"]);
// const arraySaya = ["rumah", "kantor", "!", "/"];
// const newArraySaya = [...arraySaya];
// const newArraySaya = arraySaya.slice();
// const newArraySaya = Array.from(arraySaya);
// const newArraySaya = JSON.parse(JSON.stringify(arraySaya));

// newArraySaya[0] = "😎";
//
// console.log({ arraySaya });
// console.log({ newArraySaya });

// const arraySaya = [
//   "🍌",
//   10,
//   {
//     tomato: function () {
//       console.log("ini tomat");
//     },
//   },
//   ["eat", "food"],
// ];
//
// console.log(arraySaya[2].tomato);
//
// arraySaya[2].tomato();

// const arraySaya = ["🌶️", "🍆", "🍋‍🟩"];
// const arrayKamu = ["😎", "😂", "😭"];
//
// const mergeArray = arraySaya.concat(arrayKamu);
//
// console.log(mergeArray);
// for (list of mergeArray) console.log(list);
// for (lists in mergeArray) console.log(lists);
// mergeArray.map((value, index) => console.log(value, index));

// const datas = [
//   {
//     name: "red",
//     job: "Service",
//     age: 20,
//   },
//   {
//     name: "green",
//     job: "Security",
//     age: 40,
//   },
//   {
//     name: "blue",
//     job: "Programmer",
//     age: 23,
//   },
//   {
//     name: "cyan",
//     job: "Software",
//     age: 29,
//   },
//   {
//     name: "magenta",
//     job: "Gamer",
//     age: 17,
//   },
//   {
//     name: "yellow",
//     job: "Public",
//     age: 30,
//   },
//   {
//     name: "black",
//     job: "Cleaner",
//     age: 25,
//   },
// ];

// datas.map((values, index) => {
//   console.log(values);
// });

// datas.sort((a, b) => b.age - a.age).map((values) => console.log(values));
// datas.filter((x) => x.age > 30).map((values) => console.log(values));

// datas
//   .sort((a, b) => b.age - a.age)
//   .filter((x) => x.age > 30)
//   .map((values) => console.log(values));
