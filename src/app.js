import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Variables para los palos de la baraja y sus símbolos
  const palos = ["heart", "spade", "diamond", "club"];
  const simbolos = ["♥", "♠", "♦", "♣"];
  // Variables para el número de la carta
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

  function generarCarta() {
    // Generar un índice aleatorio para el palo y la carta
    let palosAleatorios = Math.floor(Math.random() * palos.length);
    let cartasAleatorias = Math.floor(Math.random() * cartas.length);

    // Obtener un palo y un símbolo coincidente
    let paloObtenido = palos[palosAleatorios];
    let cartaObtenida = cartas[cartasAleatorias];
    let simboloObtenido = simbolos[palosAleatorios];

    // Asignar a una variable el elemento obtenido del DOM desde el div
    let cartaDiv = document.getElementById("card");
    // Resetear clases y añadir la clase del palo seleccionado
    cartaDiv.className = "card"; // Resetear clases y mantener la clase 'card'
    cartaDiv.classList.add(paloObtenido);

    // Obtener los elementos del DOM donde se mostrarán los símbolos y números
    let simboloTopDiv = cartaDiv.querySelector(".top-left.symbol");
    let simboloBottomDiv = cartaDiv.querySelector(".bottom-right.symbol");
    let numeroDiv = cartaDiv.querySelector(".center.number");

    // Actualizar los contenidos de los elementos del DOM
    simboloTopDiv.textContent = simboloObtenido;
    simboloBottomDiv.textContent = simboloObtenido;
    numeroDiv.textContent = cartaObtenida;
  }

  generarCarta();
  //Crear un evento nuevo
  const boton1 = document.getElementById("generateCard");
  boton1.addEventListener("click", generarCarta);

  // Configurar el temporizador para actualizar la carta cada 3 segundos
  setInterval(generarCarta, 3000); // 3000 milisegundos = 3 segundos
};
