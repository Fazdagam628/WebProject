const { MongoClient, ObjectID } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";

// const client = new MongoClient(uri);

// Versi Lama
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal!");
  }
  //   console.log("Koneksi berhasil!");

  // pilih database
  const db = client.db(dbName);

  // Menambahkan 1 data ke collection mahasiswa
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       nama: "Erik",
  //       email: "erik@gmail.com",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Gagal menambahkan data!");
  //       }
  //       console.log(result);
  //     }
  //   );

  // Menambahkan lebih dari 1 data
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "ganu",
  //         email: "ganu@gmail.com",
  //       },
  //       {
  //         nama: "jali",
  //         email: "jali@gmail.com",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("data gagal ditambahkan");
  //       }
  //
  //       console.log(result);
  //     }
  //   );

  //   // Menampilkan semua data yang ada di collection 'mahasiswa'
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find()
  //       .toArray((error, result) => {
  //         console.log(result);
  //       })
  //   );

  // Menampilkan data berdasarkan kriteria yang ada di collection ('mahasiswa')
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find({ nama: "Fauzan" })
  //       .toArray((error, result) => {
  //         console.log(result);
  //       })
  //   );
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find({ _id: ObjectID("681774c3d55b386d3eb5f899") })
  //       .toArray((error, result) => {
  //         console.log(result);
  //       })
  //   );

  //   // Mengubah data berdasarkan Id
  //   const updatePromise = db.collection("mahasiswa").updateOne(
  //     {
  //       _id: ObjectID("681774c3d55b386d3eb5f899"),
  //     },
  //     {
  //       $set: {
  //         email: "kali@yahoo.com",
  //       },
  //     }
  //   );
  //
  //   updatePromise
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // Mengubah data lebih dari 1,berdasarkan kriteria
  //   const updatePromise = db.collection("mahasiswa").updateMany(
  //     {
  //       nama: "fauzan",
  //     },
  //     {
  //       $set: {
  //         nama: "fauzan saja",
  //       },
  //     }
  //   );
  //   updatePromise
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // menghapus 1 data
  //   db.collection("mahasiswa")
  //     .deleteOne({
  //       _id: ObjectID("681774c3d55b386d3eb5f899"),
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // menghapus lebih dari 1 data
  db.collection("mahasiswa")
    .deleteMany({
      nama: "fauzan saja",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
