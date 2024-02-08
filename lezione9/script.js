// variabile

// per dichiarare una variabile si può usare var, let o const
let numero = 5;
let nome = "Paperino";
let colore = "rosso";

console.log(numero, nome);
// analogamente
console.log(numero + " " + nome);

let trovato = true;
console.log(trovato);

// variabile non inizializzata e variabile nulla
let variabileNonInizializzata;
let variabileNulla = null;

console.log(variabileNonInizializzata);
console.log(variabileNulla);

// Esercizio 1
// Crea due variabili e assegna dei valori numerici. Poi calcola la somma e la differenza
// tra di esse e stampa i risultati sulla console.

const a = 5;
const b = 6;

const somma = a + b;
const differenza = a - b;

console.log("La somma dei numeri è: ", somma, "La differenza dei numeri è: ", differenza);

// Esercizio 2
// Crea una variabile per rappresentare il lato di un quadrato. Calcola l'area del
// quadrato e stampa il risultato sulla console.

// commenti CTRL + K + C - per decommentare CTRL + K + U

const lato = 5;
// const areaQuadrato = lato * lato;
// console.log(areaQuadrato);

// oppure
console.log(lato * lato);

// Esercizio 3
// Crea una variabile per rappresentare il prezzo originale di un prodotto e un'altra
// variabile per lo sconto percentuale. Calcola il prezzo scontato e stampa il risultato.

let prezzo = 100;
const sconto = 20;

// let prezzoScontato = prezzo - prezzo * sconto / 100;
// console.log("Il prezzo scontato è: ", prezzoScontato);
// console.log("Il prezzo iniziale è: ", prezzo, "lo sconto è: ", sconto, "il prezzo scontato è: ", prezzoScontato);

// se non mi serve stampare il prezzo iniziale posso sovrascrivere la variabile
prezzo = prezzo - prezzo * sconto / 100;
console.log("Il prezzo scontato è: ", prezzo);

// se sono confident e voglio usare gli operatori di assegnazione combinata
// prezzo -= prezzo * sconto / 100;
// console.log("Il prezzo scontato è: ", prezzo);


// Esercizio 4
// Crea una calcolatrice che sommi due numeri inseriti dall'utente utilizzando prompt e
// poi mostri il risultato utilizzando alert.

// const x = parseInt(prompt("inserisci un numero: "));
// const y = parseInt(prompt("inserisci un secondo numero: "));

// // let sommaNumeri = x + y;
// alert(x + y);

// Esercizio 5
// Chiedi all'utente di inserire la larghezza e l'altezza di un rettangolo e calcola l'area.

// const base = parseInt(prompt("inserisci la base: "));
// const altezza = parseInt(prompt("inserisci la altezza: "));

// console.log(base * altezza);

// Esercizio 6
// Chiedi all'utente di inserire un importo in dollari utilizzando prompt, poi converti
// quell'importo in € e visualizzalo utilizzando alert. Supponi un tasso di cambio fisso.

// const dollari = parseFloat(prompt("inserisci il valore in dollari"));
// const valuta = 0.85;
// // const conversione = dollari * valuta;
// // console.log("il valore in euro è: ", conversione);
// console.log("il valore in euro è: ", dollari * valuta);

// Esercizio 7
// Chiedi all'utente il suo anno di nascita utilizzando prompt e poi calcola e mostri l'età
// corrente utilizzando JavaScript.

const annoNascita = parseInt(prompt("inserisci l'anno di nascita: "));
const annoAttuale = 2024;

console.log("i tuoi anni sono: ", annoAttuale - annoNascita);







