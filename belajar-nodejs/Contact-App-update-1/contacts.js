// Core Module
// File System
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

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

const simpanContact = (nama, email, noHp) => {
  const contact = {
    nama: nama,
    email: email,
    noHp: noHp,
  };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  // console.log("Sebelum parsing:", file);
  const contacts = JSON.parse(file);
  // console.log("Jumlah kontak yang terbaca:", contacts.length);
  // cek duplikat
  const duplikat = contacts.find((contact) => contact.noHp === noHp);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Nomer Contact Sudah Terdaftar,gunakan nomer lain")
    );
    return false;
  }

  // Cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Format email tidak valid"));
      return false;
    }
  }

  // cek nomer hp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("Format Nomor HP tidak valid"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log(chalk.green.bold.inverse("Terima kasih sudah memasukkan data"));
};


module.exports = {
  simpanContact: simpanContact,
};
