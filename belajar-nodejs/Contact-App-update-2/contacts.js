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

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  // console.log("Sebelum parsing:", file);
  const contacts = JSON.parse(file);
  // console.log("Jumlah kontak yang terbaca:", contacts.length);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const contact = {
    nama: nama,
    email: email,
    noHp: noHp,
  };
  const contacts = loadContact();
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

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.bold.inverse("Daftar Kontak : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}.${contact.nama} - ${contact.noHp}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  }

  console.log(chalk.cyan.bold.inverse(contact.nama));
  console.log(contact.noHp);
  if (contact.email) {
    console.log(contact.email);
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  // Membuat array baru tanpa nama yang difilter
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  }
  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts, null, 2));

  console.log(
    chalk.green.bold.inverse(`data contact ${nama} berhasil dihapus`)
  );
};

module.exports = {
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
};
