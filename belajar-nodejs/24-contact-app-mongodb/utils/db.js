const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "doddy",
//   noHp: "082158415841",
//   email: "doddy@gmail.com",
// });
//
// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
