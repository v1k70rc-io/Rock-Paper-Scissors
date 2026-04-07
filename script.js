

console.log(`Hello World`)

function getComputerChoice() {
    let opcion = Math.random();

    if (opcion < 0.33) {
        return 'Rock';
    } else if (opcion < 0.66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

