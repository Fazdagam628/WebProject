const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup method override
app.use(methodOverride("_method"));

// Gunakan EJS
app.set("view engine", "ejs");

// Third-party middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman home
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Fauzan",
      email: "fauzan@gmail.com",
    },
    {
      nama: "Erik",
      email: "erik@gmail.com",
    },
    {
      nama: "Dodi",
      email: "dodi@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Fauzan",
    title: "Halaman Home",
    mahasiswa: mahasiswa,
    layout: "layouts/main-layout",
  });
});

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  const contacts = await Contact.find();
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts: contacts,
    msg: req.flash("msg"),
  });
});

// Halaman form tambah
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// proses Tambah data contact
app.post(
  "/contact",
  [
    body("nama").custom(async (value) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (duplikat) {
        throw new Error(`Kontak ${value} sudah terdaftar`);
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("noHp", "Nomer handphone tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      Contact.insertMany(req.body, (error, result) => {
        // Kirimkan flash messsage
        req.flash("msg", "Data kontak berhasil ditambah!");
        res.redirect("/contact");
      });
    }
  }
);

// Proses delete contact
// app.get("/contact/delete/:nama", async (req, res) => {
//   const contact = await Contact.findOne({ nama: req.params.nama });
//
//   // Jika contact tidak ada
//   if (!contact) {
//     res.status(404);
//     res.send("<h1>404</h1>");
//   } else {
//     Contact.deleteOne({ _id: contact._id }).then((result) => {
//       req.flash("msg", "Data kontak berhasil dihapus!");
//       res.redirect("/contact");
//     });
//   }
// });

//Refactoring
app.delete("/contact", (req, res) => {
  Contact.deleteOne({ _id: req.body._id }).then((result) => {
    req.flash("msg", "Data kontak berhasil dihapus!");
    res.redirect("/contact");
  });
});

// form ubah data contact
app.get("/contact/edit/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("edit-contact", {
    title: "Form ubah Data Contact",
    layout: "layouts/main-layout",
    contact: contact,
  });
});

// proses ubah data
app.put(
  "/contact",
  [
    body("nama").custom(async (value, { req }) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (value !== req.body.oldNama && duplikat) {
        throw new Error(`Kontak ${value} sudah terdaftar`);
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("noHp", "Nomer handphone tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("edit-contact", {
        title: "Form Ubah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      Contact.updateOne(
        { _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            noHp: req.body.noHp,
          },
        }
      ).then((result) => {
        // Kirimkan flash messsage
        req.flash("msg", "Data kontak berhasil diubah!");
        res.redirect("/contact");
      });
    }
  }
);

// Halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layout",
    contact: contact,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
