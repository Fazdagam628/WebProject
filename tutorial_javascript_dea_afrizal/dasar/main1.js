document.title = "Fazgam630";
const body = document.body;

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

console.log(btn1);
console.log(btn2);

const defaultText = "Klik Saya 1";
const defaultText2 = "Klik Saya 2";
btn1.textContent = defaultText;
btn2.textContent = defaultText2;

btn1.style.border = "none";
btn1.style.borderRadius = "8px";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.backgroundColor = "tomato";

function clickButton() {
  console.log("Aman");
  btn1.style.backgroundColor = "blue";
  btn1.style.color = "white";
  const newText = document.createElement("p");
  newText.textContent = "fazdagam628";
  body.append(newText);
  //   alert("Alert,Aman");
}

function hoverButton() {
  btn1.textContent = "hai";
}

function defaultTextButton() {
  btn1.textContent = defaultText;
}

function clickButton2() {
  btn2.style.backgroundColor = "Red";
  btn2.style.color = "white";
  const textBaru = document.createElement("p");
  textBaru.textContent = "Fazdagam789";
  body.append(textBaru);
}

function hoverButton2() {
  btn2.style.color = "blue";
}

function defaultTextButton2() {}
// console.log(document.title);

// console.log(body);

// body.append("HELLO WORLD!");
// const h1 = document.createElement("h1");
// h1.textContent = " INI JUDUL";

// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = "<marquee>Fazdagam628</marquee>";

// const namakamu = document.createElement("b");
// namakamu.innerText = "Fazdagam";

// body.append(h1);
// body.append(namaSaya);
// body.append(namakamu);
