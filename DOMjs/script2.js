// const judul = document.getElementById("judul");
// judul.innerHTML = "Fauzan";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><h1>Hello World!</h1></div>";

// const judul = document.querySelector("#judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "black";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "Fauzan");

// const a = document.querySelector("section#a a");

// const p2 = document.querySelector(".p2");
// document.body.classList.toggle("biru-muda", false);

// DOM Manipulation
// Buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// Simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);
h2Baru.style.textAlign = "center";
h2Baru.style.color = "white";

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
 