const { type } = require("os");
const { argv } = require("process");
const yargs = require("yargs");
const contacts = require("./contacts");
// Mengambil argument dari command line
// console.log(process.argv);

// yargs.command(
//   "add",
//   "Menambahkan Contact Baru",
//   () => {},
//   (argv) => {
//     console.log(argv.nama);
//   }
// );

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "Nomer HP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      const contact = {
        nama: argv.nama,
        email: argv.email,
        noHp: argv.noHp,
      };
      contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    },
  })
  .demandCommand();

// Menampilkan daftar semua nama dan no hp contact
yargs.command({
  command: "list",
  describe: "menampilkan semua nama dan no HP contact ",
  handler() {
    contacts.listContact();
  },
});

// Menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// Menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();
