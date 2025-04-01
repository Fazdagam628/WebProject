// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=93131efd&s=avengers",
//   success: (movies) => console.log(movies),
// });

// const movies = fetch("http://www.omdbapi.com/?apikey=93131efd&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchrinous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("janji telah ditolak!");
//   }
// });
//
// janji1
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("Not OK : " + response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("Selesai menunggu"))
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("Not OK : " + response));
// console.log("selesai");

// Promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Sandhika",
        pemeran: "Maul,erik",
      },
      {
        judul: "Avengers",
        sutradara: "Sandhika",
        pemeran: "Maul,erik",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// eksekusi kode secara bersama
Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
