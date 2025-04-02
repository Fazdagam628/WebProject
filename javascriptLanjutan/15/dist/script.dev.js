"use strict";

// Refactor
var searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function _callee() {
  var inputKeyword, movies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          inputKeyword = document.querySelector(".input-keyword");
          _context.next = 4;
          return regeneratorRuntime.awrap(getMovies(inputKeyword.value));

        case 4:
          movies = _context.sent;
          updateUI(movies);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          // console.log(err);
          alert(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Ketika tombol di klik
// event binding

document.addEventListener("click", function _callee2(e) {
  var imdbid, movieDetail;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!e.target.classList.contains("modal-detail-button")) {
            _context2.next = 7;
            break;
          }

          // console.log("ok");
          imdbid = e.target.dataset.imdbid;
          _context2.next = 5;
          return regeneratorRuntime.awrap(getMovieDetail(imdbid));

        case 5:
          movieDetail = _context2.sent;
          updateUIDetail(movieDetail);

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          alert(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=93131efd&s=" + keyword).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }).then(function (response) {
    if (response.Response == "False") {
      throw new Error(response.Error);
    }

    return response.Search; //   console.log(response);
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

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=93131efd&i=" + imdbid).then(function (response) {
    return response.json();
  }).then(function (m) {
    return m;
  });
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