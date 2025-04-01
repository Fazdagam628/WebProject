"use strict";

// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=93131efd&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);
//       // Ketika tombol detail di-klik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=93131efd&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });
// fetch
var searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  var inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=93131efd&s=" + inputKeyword.value).then(function (response) {
    return response.json();
  }).then(function (response) {
    var movies = response.Search;
    var cards = "";
    movies.forEach(function (m) {
      cards += showCards(m);
    });
    var movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = cards; // Ketika tombol di-klik

    var modalDetailButton = document.querySelectorAll(".modal-detail-button");
    modalDetailButton.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var imdbid = this.dataset.imdbid;
        fetch("http://www.omdbapi.com/?apikey=93131efd&i=" + imdbid).then(function (response) {
          return response.json();
        }).then(function (m) {
          var movieDetail = showMovieDetail(m);
          var modalBody = document.querySelector(".modal-body");
          modalBody.innerHTML = movieDetail;
        });
      });
    });
  });
});

function showCards(m) {
  return "<div class=\"col-md-4 my-3\">\n                <div class=\"card\">\n                    <img src=\"".concat(m.Poster, "\" class=\"card-img-top\" alt=\"\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(m.Title, "</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\">").concat(m.Year, "</h6>\n                        <a href=\"#\" class=\"btn btn-primary modal-detail-button\" data-bs-toggle=\"modal\" data-bs-target=\"#movieDetailModal\" data-imdbid=\"").concat(m.imdbID, "\">Show Details</a>\n                    </div>\n                </div>\n            </div>");
}

function showMovieDetail(m) {
  return "<div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <img src=\"".concat(m.Poster, "\" alt=\"\" class=\"img-fluid\">\n                            </div>\n                            <div class=\"col-md\">\n                                <ul class=\"list-group\">\n                                    <li class=\"list-group-item\">\n                                        <h4>").concat(m.Title, " (").concat(m.Year, ")</h4>\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Rated : </strong> ").concat(m.Rated, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Plot : </strong> <br> ").concat(m.Plot, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Language : </strong> ").concat(m.Language, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Released : </strong> ").concat(m.Released, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Runtime : </strong> ").concat(m.Runtime, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Genre : </strong> ").concat(m.Genre, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Director : </strong> ").concat(m.Director, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Writer : </strong> ").concat(m.Writer, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Actors : </strong> ").concat(m.Actors, "\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Country : </strong> ").concat(m.Country, "\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>");
}