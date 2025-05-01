// Core Module
// File System
const fs = require("fs");

// Menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous!");
// } catch (error) {
//     fs.writeFileSync("error.txt", `${error}`);
//   console.log(error);
// }

// fs.writeFile("data/test.txt", "Hello world secara Asynchronous", (e) => {
//   console.log(e);
// });

// Membaca isi file (synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// Membaca isi file (Asynchronous)
// fs.readFile("datas/test.txt", "utf8", (e, data) => {
//   if (e) throw er;
//   console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Masukkan nama anda : ", (nama) => {
//   rl.question("Masukkan no hp anda : ", (no) => {
//     console.log(`Terimakasih ${nama} bernomor ${no}`);
//     rl.close();
//   });
// });

// Buat pertanyaan yang nantinya masuk ke data/contacts.json

rl.question("Masukkan nama : ", (nama) => {
  rl.question("Masukkan nomer hp : ", (noHp) => {
    const contact = {
      nama,
      noHp,
    };
    const file = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

    console.log("Terima kasih sudah memasukkan data");

    rl.close();
  });
});
