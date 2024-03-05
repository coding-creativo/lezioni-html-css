const convertiButton = document.getElementById("converti");

convertiButton.addEventListener('click', function () {
    //prendiamo il valore inserito nella casella di input
    const amount = parseFloat(document.getElementById("amount").value);
    // console.log(amount);

    //prendiamo la valuta da cui partire
    const from = document.getElementById("from").value;
    // console.log(from);

    //prendiamo la nuova valuta
    const to = document.getElementById("to").value;
    // console.log(to);

    const risultato = document.getElementById("result");
    // console.log(risultato);

    let conversione;

    if (isNaN(amount) || amount <= 0) {
        risultato.textContent = "Non è numero valido";
        return; //se non è un numero valido esce fuori dalla funzione
        //il return è l'ultima istruzione che viene eseguita
    }

    //creo la funzione per la conversione
    if (from === to) {
        risultato.textContent = "La valuta è la stessa";
        return;
    }

    if (from === "usd" && to === "eur") {
        conversione = 0.85;
    } else {
        conversione = 1.20;
    }

    const valoreConvertito = amount * conversione;
    risultato.textContent = `Il valore iniziale era ${amount} ${from} - valore convertito è: ${valoreConvertito.toFixed(2)} ${to} `;

    

});