// stampiamo i numeri da 0 a 9

// for (let i = 0; i < 10; i++) { 
//     console.log(i);
// }

// i = 0
// 0 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 0
// i = i + 1 = 1

// 1 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 1
// i = i + 1 = 1 + 1 = 2

// 2 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 2
// i = 3

// 3 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 3
// i = 4

// 4 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 4
// i = 5

// 5 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 5
// i = 6

// 6 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 6
// i = 7

// 7 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 7
// i = 8

// 8 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 8
// i = 9

// 9 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - ovvero stampa 9
// i = 10

// 10 < 10 ? se si esegue le istruzioni all'interno delle parentesi graffe - altrimenti esce dal ciclo

//stampiamo i numeri da 1 a 1000

// for (let i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// stampiamo i numeri da 10 a 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//stampiamo i numeri pari da 0 fine a 10
// i = i + 2 => i += 2
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//multipli di 3
// for (let i = 0; i <= 10; i +=3){
//     console.log(i);
// }

// inseriamo 3 numeri
// for (let i = 0; i < 3; i++) {
//     let numero = parseInt(prompt('Inserisci un numero: '));
//     console.log(numero);
// }

//inseriamo 3 numeri e stampiamo solo i dispari
// for (let i = 0; i < 3; i++) {
//     let numero = parseInt(prompt('inserisci un numero: '));
//     if (numero % 2 != 0) {
//         console.log(numero);
//     }
// }

//facciamo decidere il numero di iterazioni attraverso un prompt
// let n = parseInt(prompt('Inserisci il numero di iterazioni'));

// for (let i = 0; i < n; i++){
//     let numero = parseInt(prompt(`inserisci il numero ${i + 1} `));
//     console.log(numero);
// }

//***** sommare i numeri da 1 a 10 */ 
// somma = 0

// somma = (somma = 0) + 1 = 1
// somma = (somma = 1) + 2 = 3
// somma = (somma = 3) + 3 = 6
// somma = (somma = 6) + 4 = ...

// somma = somma + i

// 1 step - generare i numeri da 1 a 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2 step - inizializziamo la variabile somma e sommiamo i numeri
// let somma = 0; //inizializzo la somma al suo valore neutro

// for (let i = 1; i <= 10; i++) {
//     // console.log(i);
//     // somma = somma + i;
//     somma += i;
//     // console.log(somma);
// }

// console.log(somma);

//***** sommare dei numeri presi in input */ 

// const n = parseInt(prompt('Quanti numeri vuoi sommare? '));

// Es: n = 3
// somma = 0

// numero = 5
// somma = somma + numero = 0 + 5

// numero = 1
// somma = somma + numero = 5 + 1 = 6

// numero = 2
// somma = somma + numero = 6+ 2 = 8

// somma = somma + numero

// //1 step - inserire i numeri
// for (let i = 0; i < n; i++){
//     let numero = parseInt(prompt('Inserisci un numero: '));
//     console.log(numero);
// }

//2 step - sommare i numeri
// let somma = 0;

// for (let i = 0; i < n; i++){
//     let numero = parseInt(prompt('Inserisci un numero: '));
//     // console.log(numero);
//     // somma = somma + numero;
//     somma += numero;
//     // console.log(somma); //somma progressiva
// }

// console.log(somma); //somma finale

//____________
// **** Dati N numeri contare quanti sono i numeri pari e numeri dispari

// ES: 
// n = 3
// contaDispari = 0
// contaPari = 0

// numero = 5
// contaDispari = contaDispari + 1 = 1

// numero = 3
// contaDispari = contaDispari + 1 = 2

// numero = 2
// contaPari = contaPari + 1

const n = parseInt(prompt('Quanti numeri? '));
let contaPari = 0, contaDispari = 0;

for (let i = 0; i < n; i++) {
    let numero = parseInt(prompt('inserisci un numero: '));
    if (numero % 2 == 0) {
        // contaPari = contaPari + 1;
        contaPari++;
    } else {
        contaDispari++;
    }
}

console.log(`i numeri pari sono ${contaPari} - i numeri dispari sono ${contaDispari}`);



