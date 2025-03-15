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

const token = ~~[Math.random() * 123456789];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("Processing token user now...");
  setTimeout(() => {
    // return { token, username };
    callback({ token, username });
  }, 200);
}

function getUser(token, callback) {
  console.log("Processing apikey now...");
  if (token)
    setTimeout(() => {
      callback({ apiKey: "Xkey123" });
    }, 500);
}

function getPicture(apiKey, callback) {
  console.log("Processing picture now...");
  if (apiKey)
    setTimeout(() => {
      callback({ pic: pictures });
    }, 1500);
}
// const user = login("dani");
// console.log(user);
// console.log(user.token);
//
// const user = login("Dani", function (response) {
//   console.log("Done =>", response);
// });

login("Fazdagam", function (response) {
  const { token } = response;
  getUser(token, function (response) {
    const { apiKey } = response;
    getPicture(apiKey, function (response) {
      const { pic } = response;
      console.log(pic);
    });
  });
  // const apikey = getUser(token);
  // console.log({ apikey });
});
// const apiKey = getUser(user.token);
// console.log(apiKey);
//
// const getUserPicture = getPicture(apiKey);
// console.log(getUserPicture);
