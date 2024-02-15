// 1. Determina se una persona può guidare un'auto in base all'età e alla presenza di una patente.
// 2. Verifica se un numero è compreso in un intervallo specifico.
// 3. Calcola il prezzo scontato di un prodotto in base all'importo dell'acquisto.
// 4. Determina il giorno della settimana in base a un numero (1 per lunedì, 2 per martedì, ecc.).
// 5. Verifica se un carattere è una lettera maiuscola o una lettera minuscola.
// 6. Calcola l'area di un rettangolo in base alla lunghezza e alla larghezza.
// 7. FizzBuzz.
// 8. Verifica se un anno è bisestile.
// 9. Verifica se una stringa è uguale a un'altra.

// 1. Determina se una persona può guidare un'auto in base all'età e alla presenza di una patente.
// const eta = parseInt(prompt('Inserisci la tua età: '));
// const patente = prompt('Hai la patente? Inserisci si oppure no').toLowerCase().trim();
// // console.log(patente);

// if (eta >= 18 && patente == 'si' ) {
//     console.log('puoi guidare');
// } else {
//     console.log('non puoi guidare');
// }

// 2. Verifica se un numero è compreso in un intervallo specifico.
// const numero = parseFloat(prompt('Inserisci un numero: '));
// const A = 10;
// const B = 100;

// if (numero >= A && numero <= B) {
//     console.log('il numero è compreso');
// } else {
//     console.log('non compreso');
// }

// 3. Calcola il prezzo scontato di un prodotto in base all'importo dell'acquisto.
// applicare uno sconto del 10% con una spesa superiore a 50 €, 
// uno sconto del 20% con una spesa superiore a 100€, 
// uno sconto del 30% con una spesa superiore a 300€

// const spesa = 100;

// let sconto;

// if (spesa <= 50) {
//     sconto = 0;
// } else if (spesa <= 100) { // prezzo sarà tra € 50.01 e 100 
//     sconto = 10;
// } else if (spesa <= 300) { // prezzo sarà tra € 100.01 e 300 
//     sconto = 20;
// } else { // prezzo superiore a 300.01
//     sconto = 30;
// }


// const spesa = 100;

// let sconto = 0;

// if (spesa > 50 && spesa <= 100) { // prezzo sarà tra € 50.01 e 100 
//     sconto = 10;
// } else if (spesa <= 300) { // prezzo sarà tra € 100.01 e 300 
//     sconto = 20;
// } else { // prezzo superiore a 300.01
//     sconto = 30;
// }

// // console.log(sconto);
// const prezzoScontato = spesa - spesa * sconto / 100;
// // console.log(prezzoScontato);
// console.log('La spesa iniziale è €: ', spesa, 'lo sconto applicato è del: ', sconto, ' %. Il prezzo finale è €: ', prezzoScontato);
// // da windows - alt + 96 - `
// console.log(`La spesa iniziale è € ${spesa} lo sconto applicato è del ${sconto} %. Il prezzo finale è € ${prezzoScontato}`);


// 4. Determina il giorno della settimana in base a un numero (1 per lunedì, 2 per martedì, ecc.).
// const giorno = 3;

// switch (giorno) {
//     case 1:
//         console.log('Lunedì');
//         break;
//     case 2:
//         console.log('Martedì');
//         break;
//     case 3:
//         console.log('Mercoledì');
//         break;
//     case 4:
//         console.log('Giovedì');
//         break;
//     case 5:
//         console.log('Venerdì');
//         break;
//     case 6:
//         console.log('Sabato');
//         break;
//     case 7:
//         console.log('Domenica');
//         break;
//     default:
//         console.log('Non è un numero valido');
// }

// 5. Verifica se un carattere è una lettera maiuscola o una lettera minuscola.

// const carattere = 'A';

// if (carattere >= 'A' && carattere <= 'Z') {
//     console.log('carattere maiuscolo');
// } else if (carattere >= 'a' && carattere <= 'z') {
//     console.log('carattere minuscolo');
// } else {
//     console.log('non è una lettera');
// }


// 6. Calcola l'area di un rettangolo in base alla lunghezza e alla larghezza.
// const base = 10;
// const altezza = 3;

// let area;

// if (base > 0 && altezza > 0) {
//     area = base * altezza;
//     console.log(area);
// } else {
//     console.log('non posso calcolare l\'area');
// }

// 7. FizzBuzz.
// se un numero è multiplo di 3 e di 5 stampare FizzBuzz,
// se è multiplo di 3 stampare Fizz,
// se è multiplo di 5 stampare Buzz,
// altrimenti stampare il numero stesso

// const numero = 15;

// if (numero % 3 == 0 && numero % 5 == 0) {
//     console.log('FizzBuzz');
// } else if (numero % 3 == 0) {
//     console.log('Fizz');
// } else if (numero % 5 == 0) {
//     console.log('Buzz');
// } else {
//     console.log(numero);
// }

// 8. Verifica se un anno è bisestile.
// un anno è bisestile quando è divisibile per 400 oppure
// è divisibile per 4 ma non per 100

// const anno = 1700;

// if (anno % 400 == 0 || (anno % 4 == 0 && anno % 100 != 0)) {
//     console.log('anno bisestile');
// } else {
//     console.log('anno non bisestile');
// }

// 9. Verifica se una stringa è uguale a un'altra.

const stringa1 = 'ciao';
const stringa2 = 'ciao';

if (stringa1 === stringa2) {
    console.log('stinghe uguali');
} else {
    console.log('stringhe non uguali');
}