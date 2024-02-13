// 1. Calcola il massimo tra due numeri.
// 2. Verifica se un numero è pari o dispari.
// 3. Convertire una valutazione numerica in una lettera corrispondente (Es. se 10
// scrivi A, ecc.).
// 4. Verifica se una stringa è vuota o contiene testo.
// 5. Verifica se un numero è multiplo di 3.
// 6. Calcola il massimo tra tre numeri

// 1. Calcola il massimo tra due numeri.
// *** prima versione senza controllare che siano uguali
// const numero1 = parseInt(prompt('inserisci un numero: '));
// const numero2 = parseInt(prompt('inserisci un altro numero: '));

// let massimoNumeri = "";

// if (numero1 > numero2) {
//     massimoNumeri = numero1;
// } else {
//     massimoNumeri = numero2;
// }

// console.log("Il valore massimo è: ", massimoNumeri);

// *** seconda versione con il console.log
// const numero1 = parseInt(prompt('inserisci un numero: '));
// const numero2 = parseInt(prompt('inserisci un altro numero: '));

// if (numero1 > numero2) {
//     console.log("Il valore massimo è: ", numero1);
// } else {
//     console.log("Il valore massimo è: ", numero2);
// }

// *** terza versione
// const numero1 = parseInt(prompt('inserisci un numero: '));
// const numero2 = parseInt(prompt('inserisci un altro numero: '));

// if (numero1 > numero2) {
//     console.log("Il valore massimo è: ", numero1);
// } else if (numero2 > numero1) {
//     console.log("Il valore massimo è: ", numero2);
// } else {
//     console.log("I numeri sono uguali ");
// }

// *** quarta versione
// const numero1 = parseInt(prompt('inserisci un numero: '));
// const numero2 = parseInt(prompt('inserisci un altro numero: '));

// let massimo = numero1;

// if (numero2 > massimo) {
//     massimo = numero2;
// }

// console.log('Il valore massimo è: ', massimo);

// 3. Convertire una valutazione numerica in una lettera corrispondente (Es. se 10
// scrivi A, ecc.).

// const valutazione = 5;
// let risultato = "";

// if (valutazione == 10) {
//     risultato = "A";
//     // console.log('A');
// } else if (valutazione == 9) {
//     risultato = "B";
// } else if (valutazione == 8) {
//     risultato = "C";
// } else if (valutazione == 7) {
//     risultato = "D";
// } else if (valutazione == 6) {
//     risultato = "E";
// } else {
//     risultato = "F";
// }

// console.log('Il risultato è: ', risultato);
// console.log('ciao');

// 4. Verifica se una stringa è vuota o contiene testo.
// const stringa = prompt('Inserisci una stringa');
// console.log(stringa);

// if (stringa.length == 0) {
//     console.log('stringa vuota');
// } else {
//     console.log('stringa non vuota');
// }

// 5. Verifica se un numero è multiplo di 3.

// const numero = parseInt(prompt('Inserisci un numero'));

// if (numero % 3 == 0) {
//     console.log('multiplo');
// } else {
//     console.log('non multiplo');
// }


// 6. Calcola il massimo tra tre numeri
const numero1 = 12;
const numero2 = 13;
const numero3 = 3;

let massimo = numero1;

if (numero2 > massimo) {
    massimo = numero2;
}

if (numero3 > massimo) {
   massimo = numero3; 
}

console.log('il massimo è: ', massimo);



