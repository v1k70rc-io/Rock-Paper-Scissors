function getComputerChoice() {
  let numerObtenido = Math.floor(Math.random() * 10);

  if (numerObtenido >= 7) {
    return "piedra";
  } else if (numerObtenido >= 4) {
    return "papel";
  } else if (numerObtenido >= 1) {
    return "tijeras";
  }
}

function getHumanChoice() {
  let answer = prompt(
    "Escribe una opción entre 'piedra', 'papel' o 'tijeras': ",
  );

  return answer.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        `El humano a escojido ${humanChoice} y la computadora ${computerChoice}, es un empate`,
      );
    } else if (humanChoice === "piedra" && computerChoice === "tijeras") {
      humanScore++;
      console.log(
        `El humano a escojido ${humanChoice} y la computadora ${computerChoice}, el ganador es el humano`,
      );
      console.log(
        `El puntaje es: humano: ${humanScore} puntos y computadora: ${computerScore} puntos`,
      );
    } else if (humanChoice === "papel" && computerChoice === "piedra") {
      humanScore++;
      console.log(
        `El humano a escojido ${humanChoice} y la computadora ${computerChoice}, el ganador es el humano`,
      );
      console.log(
        `El puntaje es: humano: ${humanScore} puntos y computadora: ${computerScore} puntos`,
      );
    } else if (humanChoice === "tijeras" && computerChoice === "papel") {
      humanScore++;
      console.log(
        `El humano a escojido ${humanChoice} y la computadora ${computerChoice}, el ganador es el humano`,
      );
      console.log(
        `El puntaje es: humano: ${humanScore} puntos y computadora: ${computerScore} puntos`,
      );
    } else {
      computerScore++;
      console.log(
        `El humano a escojido ${humanChoice} y la computadora ${computerChoice}, el ganador es la computadora`,
      );
      console.log(
        `El puntaje es: humano: ${humanScore} puntos y computadora: ${computerScore} puntos`,
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log(`\nEl puntaje final es:`);
  console.log(`Humano: ${humanScore} puntos`);
  console.log(`Computadora: ${computerScore} puntos`);

  if (humanScore > computerScore) {
    console.log("\nEl humano a ganado!");
  } else {
    console.log("\nLa computadora a ganado!");
  }
}

playGame();
