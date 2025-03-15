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

function login(username) {
  console.log("Processing token user now...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "fazdagam") failed("Wrong Username");
      success({ token });
    }, 200);
  });
}

function getUser(token) {
  console.log("Processing apikey now...");
  return new Promise((success, failed) => {
    if (!token) failed("No token,Can't access");
    setTimeout(() => {
      success({ apiKey: "xkey123" });
    }, 500);
  });
}

function getPicture(apiKey) {
  console.log("Processing picture now...");
  return new Promise((success, failed) => {
    if (!apiKey) failed("No API Key,Can't access Picture");
    setTimeout(() => {
      success({ pic: pictures });
    }, 1500);
  });
}

// const user = login("fazdagam");
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
async function UserDisplay() {
  try {
    const { token } = await login("fazdagam");
    const { apiKey } = await getUser(token);
    const { pic } = await getPicture(apiKey);

    console.log(`
      Token anda adalah: ${token}
      Api Key anda adalah: ${apiKey}
      Request gambar anda adalah: ${pic}
      `);
  } catch (err) {
    console.log(err);
  }
}

UserDisplay();
