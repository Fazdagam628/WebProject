"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMovie = addMovie;
exports.updateMovieStatus = updateMovieStatus;
exports.calculateTotalRevenue = calculateTotalRevenue;
exports.deleteMovie = deleteMovie;
exports.movies = void 0;

function generateUniqueId() {
  return "_".concat(Math.random().toString(36).slice(2, 9));
}

var movies = [];
exports.movies = movies;
var movieId;

function addMovie(customerName, movie) {
  var totalPrice = movie.reduce(function (total, item) {
    return total + item.price;
  }, 0);
  movieId = generateUniqueId();
  var newMovie = {
    id: movieId,
    customerName: customerName,
    movie: movie,
    totalPrice: totalPrice,
    status: "Menunggu"
  };
  movies.push(newMovie);
  return newMovie;
}

function updateMovieStatus(movieId, status) {
  var movie = movies.find(function (movie) {
    return movie.id === movieId;
  });

  if (movie) {
    movie.status = status;
  }
}

function calculateTotalRevenue() {
  return movies.filter(function (movie) {
    return movie.status === "Selesai";
  }).reduce(function (total, movie) {
    return total + movie.totalPrice;
  }, 0);
}

function deleteMovie(id) {
  exports.movies = movies = movies.filter(function (movie) {
    return movie.id !== id;
  });
}