"use strict";

var apiKey = "18dc7fcbf4ec43f8b077a41f6e7315f5";
var blogContainer = document.getElementById("blog-container");
var searchField = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

function fetchRandomNews() {
  var apiUrl, response, data;
  return regeneratorRuntime.async(function fetchRandomNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(apiKey);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(apiUrl));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data.articles);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching random news", _context.t0);
          return _context.abrupt("return", []);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

searchButton.addEventListener("click", function _callee() {
  var query, articles;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          query = searchField.value.trim();

          if (!(query !== "")) {
            _context2.next = 12;
            break;
          }

          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetchNewsQuery(query));

        case 5:
          articles = _context2.sent;
          displayBlogs(articles);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](2);
          console.log("Error fetching news by query", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 9]]);
});

function fetchNewsQuery(query) {
  var apiUrl, response, data;
  return regeneratorRuntime.async(function fetchNewsQuery$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          apiUrl = "https://newsapi.org/v2/everything?q=".concat(query, "&pageSize=20&apiKey=").concat(apiKey);
          _context3.next = 4;
          return regeneratorRuntime.awrap(fetch(apiUrl));

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context3.sent;
          console.log(data.articles);
          return _context3.abrupt("return", data.articles);

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error("Error fetching random news", _context3.t0);
          return _context3.abrupt("return", []);

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach(function (article) {
    var blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    var img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    var title = document.createElement("h2");
    var truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "...." : article.title;
    title.textContent = truncatedTitle;
    var description = document.createElement("p");
    var truncatedDes = article.description.length > 120 ? article.description.slice(0, 120) + "...." : article.description;
    description.textContent = truncatedDes;
    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener("click", function () {
      window.open(article.url, "_blank");
    });
    blogContainer.appendChild(blogCard);
  });
}

(function _callee2() {
  var articles;
  return regeneratorRuntime.async(function _callee2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(fetchRandomNews());

        case 3:
          articles = _context4.sent;
          displayBlogs(articles);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error("Error fetching random news", _context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
})();