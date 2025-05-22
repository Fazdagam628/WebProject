"use strict";

var _movieManagement = require("./movieManagement.js");

(0, _movieManagement.addMovie)("Danu", [{
  name: "Doraemon",
  price: 20000
}, {
  name: "Naruto",
  price: 5000
}]);
console.log(JSON.stringify(_movieManagement.movies, null, 2));
console.log(_movieManagement.movies);
(0, _movieManagement.updateMovieStatus)(_movieManagement.movies[0].id, "Selesai");
console.log(JSON.stringify(_movieManagement.movies, null, 2));
console.log(_movieManagement.movies);
console.log((0, _movieManagement.calculateTotalRevenue)());
(0, _movieManagement.deleteMovie)(_movieManagement.movies[0].id);
console.log(JSON.stringify(_movieManagement.movies, null, 2));
console.log(_movieManagement.movies);