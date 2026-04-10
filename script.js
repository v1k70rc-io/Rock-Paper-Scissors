let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let opcion = Math.random();

    if (opcion < 0.33) {
        return 'piedra';
    } else if (opcion < 0.66) {
        return 'papel';
    } else {
        return 'tijeras' ;
    }
}

function getHumanChoice() {
    answer = prompt("piedra, papel o tijeras?")
    answer = answer.toLowerCase();

    return answer;
}

function playRound(humanChoice, computerChoice) {

    if(
        (humanChoice == 'piedra' && computerChoice == 'tijeras') ||
        (humanChoice == 'papel' && computerChoice == 'piedra') ||
        (humanChoice == 'tijeras' && computerChoice == 'papel')
    ) {
        humanScore++;
        console.log('Punto para el humano')
    } else if (humanChoice === computerChoice) {
        console.log('Empate');
    } else {
        computerScore++;
        console.log('Punto para la computadora')
    }

}


function playGame() {
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`La eleccion del humano es: ${humanSelection}`);
        console.log(`La eleccion de la computadora es ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`Puntos del humano: ${humanScore}`);
        console.log(`Puntos de la computadora ${computerScore}`);
    }
}

playGame();



