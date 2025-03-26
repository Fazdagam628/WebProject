// var penumpang = [];
//
// var tambahPenumpang = function (namaPenumpang, penumpang) {
//   if (penumpang.length == 0) {
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         for (var j = 0; j < penumpang.length; j++) {
//           if (namaPenumpang == penumpang[j]) {
//           }
//           console.log(`${namaPenumpang} sudah ada di dalam angkot`);
//           return penumpang;
//         }
//       }
//       if (namaPenumpang != penumpang[i]) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       }
//     }
//     if (namaPenumpang == penumpang[i]) {
//       console.log(`${namaPenumpang} sudah ada di dalam angkot`);
//       return penumpang;
//     }
//
//     if (i == penumpang.length - 1) {
//       penumpang.push(namaPenumpang);
//       return penumpang;
//     }
//   }
// };
//
// var hapusPenumpang = function (namaPenumpang) {
//   // Jika tidak ada penumpang di dalam angkot
//   if (penumpang.length == 0) {
//     console.log("Angkot masih kosong");
//     return penumpang;
//   }
//
//   for (var i = 0; i < penumpang.length; i++) {
//     if (namaPenumpang == penumpang[i]) {
//       penumpang[i] = undefined;
//       return penumpang;
//     } else if (i == penumpang.length - 1) {
//       console.log(`${namaPenumpang} tidak ada di angkot`);
//       return penumpang;
//     }
//   }
// };
// // var penumpang = [];
// // // tambah penumpang
// // var tambahPenumpang = function (namaPenumpang) {
// //   // jika angkot kosong
// //   if (penumpang.length == 0) {
// //     penumpang.push(namaPenumpang);
// //     return penumpang;
// //   }
// //
// //   // jika angkot ada penumpang
// //
// //   // perulangan untuk menelusuri seluruh kursi dari awal
// //   for (var i = 0; i < penumpang.length; i++) {
// //     // jika kursi bernilai undefined
// //     if (penumpang[i] == undefined) {
// //       // perulangan untuk setiap elemen array
// //       for (var j = 0; j < penumpang.length; j++) {
// //         // jika kursi bernilai undefined dan nama penumpang sama dengan salah satu elemen array
// //         if (namaPenumpang == penumpang[j]) {
// //           console.log(namaPenumpang + " Sudah ada didalam angkot.");
// //           return penumpang;
// //         }
// //       }
// //
// //       // jika kursi bernilai undefined dan nama penumpang tidak sama dengan salah satu elemen array
// //       if (namaPenumpang != penumpang[i]) penumpang[i] = namaPenumpang;
// //       return penumpang;
// //     }
// //
// //     // jika kursi tidak bernilai undefined dan nama penumang sama dengan salah satu elemen array
// //     if (namaPenumpang == penumpang[i]) {
// //       console.log(namaPenumpang + " Sudah ada didalam angkot.");
// //       return penumpang;
// //     }
// //
// //     // jika kursi sudah penuh
// //     if (i == penumpang.length - 1) {
// //       penumpang.push(namaPenumpang);
// //       return penumpang;
// //     }
// //   }
// // };
// //
// // // hapus penumpang
// // var hapusPenumpang = function (namaPenumpang) {
// //   // jika tidak ada penumpang didalam angkot
// //   if (penumpang.length == 0) {
// //     console.log("Angkot masih kosong.");
// //     return penumpang;
// //   }
// //
// //   // pengulangan untuk menelusuri elemen array
// //   for (var i = 0; i < penumpang.length; i++) {
// //     // jika nama penumpang yang ingin dihapus ada didalam array
// //     if (namaPenumpang == penumpang[i]) {
// //       penumpang[i] = undefined;
// //       return penumpang;
// //     }
// //     // jika nama penumpang yang ingin dihapus tidak ada didalam array
// //     else if (i == penumpang.length - 1) {
// //       console.log(namaPenumpang + " Tidak ada didalam angkot.");
// //       return penumpang;
// //     }
// //   }
// // };

var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // Tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    //   Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahannya
        console.log(`${namaPenumpang} sudah ada di dalam angkot`);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika tidak ada penumpang didalam angkot
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
    return penumpang;
  }
  // pengulangan untuk menelusuri elemen array
  for (var i = 0; i < penumpang.length; i++) {
    // jika nama penumpang yang ingin dihapus ada didalam array
    if (namaPenumpang == penumpang[i]) {
      penumpang[i] = undefined;
      return penumpang;
    }
    // jika nama penumpang yang ingin dihapus tidak ada didalam
    else if (i == penumpang.length - 1) {
      console.log(`${namaPenumpang} tidak ada di angkot`);
      return penumpang;
    }
  }
};
