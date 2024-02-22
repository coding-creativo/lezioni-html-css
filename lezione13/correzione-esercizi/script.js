// 1 Inserire dei numeri finché non si inserisce il valore 1000
// 2 Sommare dei numeri finché la somma non raggiunge 100
// 3 Fare la somma solo dei numeri dispari (da fare sia con il for, sia con il while)
// 4 Generare un numero casuale da 1 a 20, poi il programma continua a chiedere all'utente di indovinare il numero casuale finché non ha indovinato correttamente.
// 5 Sommare dei numeri, terminare quando si inserisce un numero negativo
// 6 Scrivere un programma che raddoppi un numero fino a quando non raggiunge o supera un certo limite.
// 7 Scrivi un programma che calcoli il Massimo Comune Divisore (MCD) di due numeri inseriti dall'utente utilizzando l'algoritmo di Euclide.


// 1 Inserire dei numeri finché non si inserisce il valore 1000

// let numero = parseInt(prompt('inserisci un numero'));

// while(numero !== 1000){
//     console.log(numero);
//     numero = parseInt(prompt('inserisci un numero'));
// }

// 2 Sommare dei numeri finché la somma non raggiunge 100
// let somma = 0;

// // finchè la somma è minore di 100 continuiamo ad inserire dei numeri e li sommiamo
// // quando la somma raggiunge 100 ci fermiamo

// while (somma < 100) {
//     let numero = parseInt(prompt('inserisci un numero'));
//     somma = somma + numero;
//     console.log(somma); //stampiamo la somma progressiva
//     // somma += numero;
// }

// console.log(`somma finale: ${somma}`);

// 3 Fare la somma solo dei numeri dispari (da fare sia con il for, sia con il while)

// let n = parseInt(prompt('Inserisci un numero positivo! Quanti numeri?: '));

// // facciamo un controllo dell'input su n - controlliamo che sia maggiore di 0
// while (n <= 0) { //finchè n è minore o uguale a 0
//     n = parseInt(prompt('Attenzione! Inserisci un numero positivo! Quanti numeri vuoi inserire?: '));
// }

// let sommaDispari = 0;

// for(let i = 0; i < n; i++) {
//     let numero = parseInt(prompt('inserisci un numero'));
//     if(numero % 2 !== 0) { //se il numero è dispari
//         sommaDispari = sommaDispari + numero;
//     }
// }

// console.log(sommaDispari);

// con il while - ma meglio utilizzare il for in questo caso

// let i = 0;

// while(i < n) {
//     let numero = parseInt(prompt('inserisci un numero'));
//     if(numero % 2 !== 0) { //se il numero è dispari
//         sommaDispari += numero;
//     }

//     i++; //dobbiamo stare attenti a non dimenticare l'incremento di i
// }

// console.log(sommaDispari);

// 4 Generare un numero casuale da 1 a 20, poi il programma continua a chiedere all'utente di indovinare il numero casuale finché non ha indovinato correttamente.

// const numeroCasuale = getRndInteger(1, 20);
// console.log(numeroCasuale);

// // 1 soluzione
// let tentativo = false;

// while (!tentativo) { //oppure tentativo === false -- !false = true
//     let indovina = parseInt(prompt('Indovina il numero: '));
//     if (indovina === numeroCasuale) {
//         tentativo = true;
//         console.log('Hai indovinato il numero!');
//     }
// }

// // 2 soluzione
// // let tentativo;

// // while(tentativo !== numeroCasuale) {
// //     tentativo = parseInt(prompt('Indovina il numero: '));
// // }

// // alert('Hai indovinato');

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }


//  5 Sommare dei numeri, terminare quando si inserisce un numero negativo
// let somma = 0;
// let numero = parseInt(prompt('Inserisci un numero: '));

// while (numero >= 0) {
//     somma += numero;
//     numero = parseInt(prompt('Inserisci un numero: '));
// }

// console.log(somma);

// 6 Scrivere un programma che raddoppi un numero fino a quando non raggiunge o supera un certo limite.

// const limite = 50;
// let numero = parseInt(prompt('Inserisci un numero: '));

// while (numero < limite) {
//     numero *= 2;
//     console.log(numero);
// }

// console.log('valore finale', numero);

// 7 Scrivi un programma che calcoli il Massimo Comune Divisore (MCD) di due numeri inseriti dall'utente utilizzando l'algoritmo di Euclide.

// a = 48 e b = 18

// MDC(a,b) = MCD(b, a % b)

// 1 passaggio
// b = a % b = 48 % 18 => resto 12

// 2 secondo passaggio
// a = b = 18
// b = a % b = 12

// 3 passaggio
// a = b = 12
// b = a % b = 18 % 12 = 6

// 4 passaggio
// a = b = 6 //MCD
// b = a % b = 12 % 2 = 0

let a = parseInt(prompt('Inserisci il valore di a: '));
let b = parseInt(prompt('Inserisci il valore di b che deve essere minore di a: '));

while (b > a) {
    a = parseInt(prompt('Inserisci il valore di a: '));
    b = parseInt(prompt('Inserisci il valore di b che deve essere minore di a: '));
}

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

console.log(a);


// --- scambio di variabili
// a = 5;
// b = 3;

// // a = b = 3;
// // b = a = 3; //sbagliato!!!

// temp = a = 5;
// a = b = 3;
// b = temp = 5;

