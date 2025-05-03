const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  // res.json({
  //   nama: "Fauzan",
  //   email: "fauzan@gmail.com",
  //   noHp: "0812356984",
  // });
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const port = 3000;
//
// const renderHtml = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error: File not found!");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };
//
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     const url = req.url;
//     // console.log(url);
//
//     switch (url) {
//       case "/about":
//         renderHtml("./about.html", res);
//         break;
//       case "/contact":
//         renderHtml("./contact.html", res);
//         break;
//       default:
//         renderHtml("./index.html", res);
//         break;
//     }
//
//     // if (url === "/about") {
//     //   renderHtml("./about.html", res);
//     // } else if (url === "/contact") {
//     //   renderHtml("./contact.html", res);
//     // } else {
//     //   renderHtml("./index.html", res);
//     // }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}..`);
//   });
