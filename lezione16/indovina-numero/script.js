// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

// getRndInteger(1,100);

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let secretNumber; //variabile globale - viene vista anche dentro le funzioni
let attempts = 0;

startGame();

function startGame() {
    secretNumber = getRndInteger(1,100);
    console.log(secretNumber);
}

// console.log(getRndInteger(1,100));

const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');

checkButton.addEventListener('click', checkGuess);

function checkGuess(){
    const guessInput = parseInt(document.getElementById('guess').value);
    const resultDiv = document.getElementById('result');
    // console.log(guessInput);

    // isNaN(guessInput) vuol dire se guessIntput non è un numero

    if (isNaN(guessInput) || guessInput < 1 || guessInput > 100) {
        resultDiv.textContent = 'Numero non valido!';
        return;
    }

    attempts++;
    console.log(attempts);
    
    if (guessInput === secretNumber) {
        resultDiv.textContent = `Congratulazioni. Hai indovinato il numero ${secretNumber} in ${attempts} tentativi`;
        checkButton.disabled = true;
    } else if (attempts === 5) {
        resultDiv.textContent = `hai esaurito i tentativi.`;
        checkButton.disabled = true;
    } else if (guessInput < secretNumber) {
        resultDiv.textContent = `Il numero è troppo basso. Hai fatto ${attempts} tentativi.`;
    } else {
        resultDiv.textContent = `Il numero è troppo alto. ${attempts} tentativi`;
    }

}




resetButton.addEventListener('click', resetGame);

function resetGame(){
    startGame();
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
}

