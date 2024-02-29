

const incrementaButton = document.getElementById('incrementa');
const decrementaButton = document.getElementById('decrementa');

let clickCounter = 0;
const counter = document.getElementById('counter');


incrementaButton.addEventListener('click', function() {
    clickCounter++; //incremento il contatore
    counter.innerHTML = clickCounter; 
    //sto scrivendo nel div con id counter il nuovo valore di counter
});

decrementaButton.addEventListener('click', function(){
    if (clickCounter > 0) {
        clickCounter--;
    }
    counter.innerHTML = clickCounter; 
});