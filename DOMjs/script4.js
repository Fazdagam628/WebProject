// const button1 = document.querySelector(".button1");
const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightgreen";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
});

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  console.log(`${r},${g},${b}`);
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  const bodyMerah =
    (document.body.style.backgroundColor = `rgb(${r},${g},${b})`);
  console.log(bodyMerah);
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  const bodyHijau =
    (document.body.style.backgroundColor = `rgb(${r},${g},${b})`);
  console.log(bodyHijau);
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  const bodyBiru =
    (document.body.style.backgroundColor = `rgb(${r},${g},${b})`);
  console.log(bodyBiru);
});

// const range = document.querySelectorAll("input");
//
// for (let i = 0; i < range.length; i++) {
//   range[i].addEventListener("input", function () {
//     const r = range[0].value;
//     const g = range[1].value;
//     const b = range[2].value;
//
//     const bodyStyle =
//       (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
//     console.log(bodyStyle);
//   });
// }

document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
