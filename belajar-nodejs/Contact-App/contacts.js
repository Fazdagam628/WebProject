// Core Module
// File System
const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHp) => {
  const contact = {
    nama: nama,
    email: email,
    noHp: noHp,
  };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log("Terima kasih sudah memasukkan data");

  rl.close();
};

module.exports = {
    tulisPertanyaan: tulisPertanyaan,
    simpanContact:simpanContact
}