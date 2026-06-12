let puntuacionJugador = 0;
let puntuacionComputadora = 0;
let juegoTerminado = false;

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
      mensaje: `La ronda ha sido un empate. El jugador escogio ${eleccionJugador} y la computadora escogio ${eleccionComputadora}`,
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

const actualizarPuntuacion = (resultado) => {
  if (resultado.ganador === "jugador") {
    puntuacionJugador++;
  } else if (resultado.ganador === "computadora") {
    puntuacionComputadora++;
  }
};

const render = (resultado) => {
  marcadorJugador.textContent = puntuacionJugador;
  marcadorComputadora.textContent = puntuacionComputadora;
  resultadoRonda.textContent = resultado.mensaje;
};

const comprobarFinJuego = () => {
  if (puntuacionJugador === 5) {
    return "jugador";
  } else if (puntuacionComputadora === 5) {
    return "computadora";
  }

  return null;
};

const mostrarGanadorFinal = (resultadoFinJuego) => {
  if (resultadoFinJuego !== null) {
    resultadoFinal.textContent = `El ganador del juego es ${resultadoFinJuego}`;

    juegoTerminado = true;

    botonesEleccion.forEach((botonActual) => {
      botonActual.disabled = true;
    });
  }
};

const manejarEleccion = (evento) => {
  if (juegoTerminado) {
    return;
  }

  const eleccionJugador = evento.currentTarget.dataset.eleccion;
  const eleccionComputadora = obtenerEleccionComputadora();
  const resultado = jugarRonda(eleccionJugador, eleccionComputadora);

  actualizarPuntuacion(resultado);
  render(resultado);

  const resultadoFinJuego = comprobarFinJuego();
  mostrarGanadorFinal(resultadoFinJuego);
};

botonesEleccion.forEach((botonSelecciondo) => {
  botonSelecciondo.addEventListener("click", manejarEleccion);
});
