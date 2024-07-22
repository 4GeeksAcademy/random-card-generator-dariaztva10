import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //Variable para los palos de la baraja
  const palos = ["heart", "spade", "diamond", "club"];
  const simbolos = ["♠", "♣", "♥", "♦"];
  //Variable para el número de la carta
  const cartas = [
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
    "K",
    "A"
  ];

  //Generar un índice aleatorio para el palo y la carta
  let palosAleatorios = Math.floor(Math.random() * palos.length);
  let cartasAleatorias = Math.floor(Math.random() * cartas.length);

  //Quiero obtener un palo y un símbolo coincidente
  let paloObtenido = palos[palosAleatorios];
  let cartaObtenida = cartas[cartasAleatorias];
  let simboloObtenido = simbolos[palosAleatorios];

  //Vamos a asignar a una variable el elemento obtenido del DOM desde el div
  let cartaDiv = document.getElementById("card");
  //Añadir la clase al palo seleccionado
  cartaDiv.classList.add(paloObtenido);

  //Obtener los elementos del DOM donde se mostrarán los símbolos y números
  let simboloTopDiv = cartaDiv.querySelector(".top-left.symbol");
  let simboloBottomDiv = cartaDiv.querySelector(".bottom-right.symbol");
  let numeroDiv = cartaDiv.querySelector(".center.number");

  // Actualizar los contenidos de los elementos del DOM
  simboloTopDiv.textContent = simboloObtenido;
  simboloBottomDiv.textContent = simboloObtenido;
  numeroDiv.textContent = cartaObtenida;

  console.log(
    `Palo obtenido: ${paloObtenido}, Carta obtenida: ${cartaObtenida}, Símbolo obtenido: ${simboloObtenido}`
  );
};
