"use strict";

// function satu() {
//   console.log("Satu");
// }
// function dua() {
//   setTimeout(() => {
//     console.log("Dua");
//   }, 3000);
// }
// function tiga() {
//   console.log("Tiga");
// }
//
// satu();
// dua();
// tiga();
var token = ~~[Math.random() * 123456789];
var pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("Processing token user now...");
  return new Promise(function (success, failed) {
    setTimeout(function () {
      if (username != "fazdagam") failed("Wrong Username");
      success({
        token: token
      });
    }, 200);
  });
}

function getUser(token) {
  console.log("Processing apikey now...");
  return new Promise(function (success, failed) {
    if (!token) failed("No token,Can't access");
    setTimeout(function () {
      success({
        apiKey: "xkey123"
      });
    }, 500);
  });
}

function getPicture(apiKey) {
  console.log("Processing picture now...");
  return new Promise(function (success, failed) {
    if (!apiKey) failed("No API Key,Can't access Picture");
    setTimeout(function () {
      success({
        pic: pictures
      });
    }, 1500);
  });
} // const user = login("fazdagam");
// user
//   .then(function (response) {
//     // console.log("lalala", response);
//     // console.log(response);
//     const { token } = response;
//     getUser(token)
//       .then(function (response) {
//         const { apiKey } = response;
//         console.log(apiKey);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
// async function UserDisplay() {
//   const { token } = await login("fazdagam");
//   const { apiKey } = await getUser(token);
//   const { pic } = await getPicture(apiKey);
//
//   console.log(`
//     Token anda adalah: ${token}
//     Api Key anda adalah: ${apiKey}
//     Request gambar anda adalah: ${pic}
//     `);
// }


function UserDisplay() {
  var _ref, _token, _ref2, apiKey, _ref3, pic;

  return regeneratorRuntime.async(function UserDisplay$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(login("fazdagam"));

        case 3:
          _ref = _context.sent;
          _token = _ref.token;
          _context.next = 7;
          return regeneratorRuntime.awrap(getUser(_token));

        case 7:
          _ref2 = _context.sent;
          apiKey = _ref2.apiKey;
          _context.next = 11;
          return regeneratorRuntime.awrap(getPicture(apiKey));

        case 11:
          _ref3 = _context.sent;
          pic = _ref3.pic;
          console.log("\n      Token anda adalah: ".concat(_token, "\n      Api Key anda adalah: ").concat(apiKey, "\n      Request gambar anda adalah: ").concat(pic, "\n      "));
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
}

UserDisplay();