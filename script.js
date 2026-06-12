let puntuacionJugador = 0;
let puntuacionComputadora = 0;

const marcadorJugador = document.querySelector(".puntuacion-humano");
const marcadorComputadora = document.querySelector(".puntuacion-computadora");

const resultadoRonda = document.querySelector(".resultado-ronda");
const resultadoFinal = document.querySelector(".resultado-juego");

const botonesEleccion = document.querySelectorAll("[data-eleccion]");

const obtenerEleccionComputadora = () => {
  const eleccionComputadora = Math.floor(Math.random() * 3);

  if (eleccionComputadora === 0) {
    return "piedra";
  } else if (eleccionComputadora === 1) {
    return "papel";
  } else {
    return "tijeras";
  }
};

const jugarRonda = (eleccionJugador, eleccionComputadora) => {
  if (eleccionJugador === eleccionComputadora) {
    return {
      ganador: "empate",
      mensaje: `la ronda ha sido un empate, el jugador escogio ${eleccionJugador} y la computadora escogio ${eleccionComputadora}`,
    };
  } else if (
    (eleccionJugador === "piedra" && eleccionComputadora === "tijeras") ||
    (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
    (eleccionJugador === "tijeras" && eleccionComputadora === "papel")
  ) {
    return {
      ganador: "jugador",
      mensaje: `Ha ganado el jugador. ${eleccionJugador} vence a ${eleccionComputadora}`,
    };
  } else {
    return {
      ganador: "computadora",
      mensaje: `Ha ganado la computadora. ${eleccionComputadora} vence a ${eleccionJugador}!`,
    };
  }
};

botonesEleccion.forEach((botonSelecciondo) => {
  botonSelecciondo.addEventListener("click", () => {});
});

let render = () => {};
