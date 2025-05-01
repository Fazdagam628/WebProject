// const { tulisPertanyaan, simpanContact } = require("./contacts");
const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan Nama Anda: ");
  const email = await contacts.tulisPertanyaan("Masukkan Email Anda: ");
  const noHp = await contacts.tulisPertanyaan("Masukkan Nomer HP Anda: ");

  contacts.simpanContact(nama, email, noHp);
};
main();
