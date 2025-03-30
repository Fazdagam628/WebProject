// // Ambil semua elemen video
// const videos = Array.from(document.querySelectorAll("[data-duration]"));
//
// // Pilih hanya yang "JAVASCRIPT LANJUTAN"
// let jsLanjut = videos
//   .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
//   // Ambil durasi masing2 video
//   .map((item) => item.dataset.duration)
//   // ubah durasi menjadi float,ubah menit menjadi detik
//   .map((waktu) => {
//     // 10:30 -> [10,30] split
//     const parts = waktu.split(":").map((part) => parseFloat(part));
//     return parts[0] * 60 + parts[1];
//   })
//   // jumlahkan semua detik
//   .reduce((total, detik) => total + detik, 0);
// // ubah formatnya jadi jam menit detik
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;
// // simpan di DOM
// const pDurasi = document.querySelector(".total-durasi");
// pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
// const jmlVideo = videos.filter((video) =>
//   video.textContent.includes("JAVASCRIPT LANJUTAN")
// ).length;
// const pJmlVideo = document.querySelector(".jumlah-video");
// pJmlVideo.textContent = `${jmlVideo}`;
// console.log(jmlVideo);

// const numbers = [0, 1, 2, 3];
// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(9)); // false
// console.log(numbers.includes(1, 3)); // false
// console.log(numbers.includes(2, 1)); // true
//
// const sentence = "Hello there, world!";
// console.log(sentence.includes("hello")); // false
// console.log(sentence.includes("Hello")); // true
// console.log(sentence.includes("there", 1)); // true
// console.log(sentence.includes("there", 6)); // true
// console.log(sentence.includes("there", 7)); // false

// const nilaiS1 = [85, 90, 89, 83, 88, 80, 85, 78, 91, 80, 87, 88];
// const nilaiS2 = [87, 90, 89, 86, 90, 83, 85, 85, 90, 85, 90, 97];
// const nilaiS3 = [83, 90, 84, 93, 88, 80, 87, 88, 86, 93, 88];

// function semester(nilaiS) {
//   sum = 0;
//   for (let i = 0; i < nilaiS.length; i++) {
//     sum += nilaiS[i];
//   }
//   return sum / nilaiS.length;
// }

// let jumlah =
//   (semester(nilaiS1) +
//     semester(nilaiS2) +
//     semester(nilaiS3) +
//     semester(nilaiS2) +
//     semester(nilaiS2)) /
//   5;

// console.log(jumlah);
