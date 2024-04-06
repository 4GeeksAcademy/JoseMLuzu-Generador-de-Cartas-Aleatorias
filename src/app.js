import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let intervalID;

function generarCarta() {
  let carta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let figura = ["♦", "♥", "♠", "♣"];
  let numeroRandom = carta[Math.floor(Math.random() * carta.length)];
  let figuraRandom = figura[Math.floor(Math.random() * figura.length)];
  let paloArriba = document.getElementById("palo1");
  let numero = document.getElementById("numero");
  let paloAbajo = document.getElementById("palo2");

  paloArriba.innerText = figuraRandom;
  paloAbajo.innerText = figuraRandom;
  numero.innerText = numeroRandom;

  if (figuraRandom === "♦" || figuraRandom === "♥") {
    paloArriba.classList.add("rojo");
    paloAbajo.classList.add("rojo");
  } else {
    paloArriba.classList.add("negro");
    paloAbajo.classList.add("negro");
  }
}

window.onload = function() {
  generarCarta();
  document
    .getElementById("generarCarta")
    .addEventListener("click", generarCarta);

  intervalID = setInterval(generarCarta, 10000);
};

window.onunload = function() {
  clearInterval(intervalID);
};
