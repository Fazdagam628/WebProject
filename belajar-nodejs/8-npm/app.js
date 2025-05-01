const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("fauzan@gmail.com"));
// console.log(validator.isNumeric("0813242757"));

// console.log(chalk.whiteBright.italic.bold("Hello World!"));

const nama = chalk`{bgGreen.bold.italic Fauzan}`;
const pesan = chalk`{bgBlueBright.bold.italic Excepteur} mollit nisi {italic.bold.bgRedBright elit amet incididunt} mollit eiusmod. ${nama}`;

console.log(pesan);
