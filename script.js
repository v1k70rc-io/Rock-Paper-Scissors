

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

    return answer.toLoweCase();
}



