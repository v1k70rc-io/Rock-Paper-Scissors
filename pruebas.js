function getComputerChoice() {
  let numeroObtenido = Math.floor(Math.random() * 3);

  switch (numeroObtenido) {
    case 0:
      return "piedra";
      break;
    case 1:
      return "papel";
      break;
    case 2:
      return "tijeras";
      break;
  }
}

function getHumanChoice() {
  const opcionesValidas = [1, 2, 3];

  while (true) {
    let respuesta = prompt(
      "Escribe una de las siguientes opciones \n 1. piedra \n 2. papel \n 3. tijeras",
    );

    if (respuesta === null) {
      alert("No puedes salir, escoje una opcion");
      continue;
    }

    if (opcionesValidas.includes(respuesta)) {
      console.log(respuesta);
      break;
    }

    alert("Opcion incorrecta, intenta nuevamente");
  }

  console.log("Bucle terminado");
}

getHumanChoice();

















