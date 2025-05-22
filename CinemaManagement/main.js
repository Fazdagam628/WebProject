import {
  movies,
  addMovie,
  updateMovieStatus,
  calculateTotalRevenue,
  deleteMovie,
} from "./movieManagement.js";

addMovie("Danu", [
  {
    name: "Doraemon",
    price: 20000,
  },
  {
    name: "Naruto",
    price: 5000,
  },
]);

console.log(JSON.stringify(movies, null, 2));
console.log(movies);

updateMovieStatus(movies[0].id, "Selesai");
console.log(JSON.stringify(movies, null, 2));
console.log(movies);

console.log(calculateTotalRevenue());

deleteMovie(movies[0].id);
console.log(JSON.stringify(movies, null, 2));
console.log(movies);
