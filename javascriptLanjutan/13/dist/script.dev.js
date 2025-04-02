"use strict";

// fetch
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=93131efd&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;
//
//       // Ketika tombol di-klik
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=93131efd&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });
// Refactor
var searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function _callee() {
  var inputKeyword, movies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          inputKeyword = document.querySelector(".input-keyword");
          _context.next = 3;
          return regeneratorRuntime.awrap(getMovies(inputKeyword.value));

        case 3:
          movies = _context.sent;
          updateUI(movies);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Ketika tombol di klik
// event binding

document.addEventListener("click", function _callee2(e) {
  var imdbid, movieDetail;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!e.target.classList.contains("modal-detail-button")) {
            _context2.next = 6;
            break;
          }

          // console.log("ok");
          imdbid = e.target.dataset.imdbid;
          _context2.next = 4;
          return regeneratorRuntime.awrap(getMovieDetail(imdbid));

        case 4:
          movieDetail = _context2.sent;
          updateUIDetail(movieDetail);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=93131efd&i=" + imdbid).then(function (response) {
    return response.json();
  }).then(function (m) {
    return m;
  });
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=93131efd&s=" + keyword).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response.Search;
  });
}

function updateUI(movies) {
  var cards = "";
  movies.forEach(function (m) {
    return cards += showCards(m);
  });
  var movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function updateUIDetail(m) {
  var movieDetail = showMovieDetail(m);
  var modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return "<div class=\"col-md-4 my-3\">\n                <div class=\"card\">\n                    <img src=\"".concat(m.Poster, "\" class=\"card-img-top\" alt=\"\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(m.Title, "</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\">").concat(m.Year, "</h6>\n                        <a href=\"#\" class=\"btn btn-primary modal-detail-button\" data-bs-toggle=\"modal\" data-bs-target=\"#movieDetailModal\" data-imdbid=\"").concat(m.imdbID, "\">Show Details</a>\n                    </div>\n                </div>\n            </div>");
}

function showMovieDetail(m) {
  return "<div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <img src=\"".concat(m.Poster, "\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"col-md\">\n                                <ul class=\"list-group\">\n                                    <li class=\"list-group-item\">\n                                        <h4>").concat(m.Title, " (").concat(m.Year, ")</h4>\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Rated : </strong> ").concat(m.Rated, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Plot : </strong> <br> ").concat(m.Plot, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Language : </strong> ").concat(m.Language, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Released : </strong> ").concat(m.Released, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Runtime : </strong> ").concat(m.Runtime, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Genre : </strong> ").concat(m.Genre, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Director : </strong> ").concat(m.Director, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Writer : </strong> ").concat(m.Writer, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Actors : </strong> ").concat(m.Actors, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Country : </strong> ").concat(m.Country, "\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>");
}