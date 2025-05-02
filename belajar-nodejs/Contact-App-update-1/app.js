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

yargs.command({
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
});

yargs.parse();
