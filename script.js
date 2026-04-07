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

    console.log(`Eleccion del humano: ${humanChoice}`);
    console.log(`Eleccion de la computadora: ${computerChoice}`);

    if(
        (humanChoice === 'piedra' && computerChoice === 'tijeras') ||
        (humanChoice === 'papel' && computerChoice === 'piedra') ||
        (humanChoice === 'tijeras' && computerChoice === 'papel') 
    ) {
        humanScore++;
        console.log('Punto para el humano');
    } else if (humanChoice === computerChoice) {
        console.log('Es un empate')
    } else {
        computerScore++;
        console.log('Punto para la computadora');
    }

    console.log(`Puntos del humano: ${humanScore}`);
    console.log(`Puntos para la computadora ${computerScore}`);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



