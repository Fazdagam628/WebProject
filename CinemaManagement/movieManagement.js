function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let movies = [];
let movieId;

function addMovie(customerName, movie) {
  const totalPrice = movie.reduce((total, item) => total + item.price, 0);
  movieId = generateUniqueId();
  const newMovie = {
    id: movieId,
    customerName,
    movie,
    totalPrice,
    status: "Menunggu",
  };
  movies.push(newMovie);
  return newMovie;
}

function updateMovieStatus(movieId, status) {
  const movie = movies.find((movie) => movie.id === movieId);
  if (movie) {
    movie.status = status;
  }
}

function calculateTotalRevenue() {
  return movies
    .filter((movie) => movie.status === "Selesai")
    .reduce((total, movie) => total + movie.totalPrice, 0);
}

function deleteMovie(id) {
  movies = movies.filter((movie) => movie.id !== id);
}
export {
  movies,
  addMovie,
  updateMovieStatus,
  calculateTotalRevenue,
  deleteMovie,
};
